
import { db, fieldValue } from './firebase';
import { normalizeVin, vinMatch } from './utils';
import { StockItem, RequestRow } from '../types';

/**
 * FIXED: This function ensures that when a transfer is completed (Step 3),
 * the car's location in the global stock (mzj_admin_state/v1) is updated immediately.
 */
export const updateStockLocationsAfterMoveFinish = async (rows: Partial<RequestRow>[]) => {
  if (!rows || !rows.length) return;
  const stateRef = db.collection("mzj_admin_state").doc("v1");

  try {
    await db.runTransaction(async (tx) => {
      const snap = await tx.get(stateRef);
      if (!snap.exists) return;

      const data = snap.data() || {};
      const stockArray: StockItem[] = Array.isArray(data.stock) ? [...data.stock] : [];

      // Create a map of normalized VINs to their new locations
      const vinToNewLoc = new Map<string, string>();
      rows.forEach(r => {
        const v = normalizeVin(r.vin || r.__id || "");
        const newLoc = r.toLocation || r.location || "";
        if (v && newLoc) vinToNewLoc.set(v, newLoc);
      });

      if (vinToNewLoc.size === 0) return;

      let hasChanges = false;
      for (let i = 0; i < stockArray.length; i++) {
        const item = stockArray[i];
        const stockVin = normalizeVin(item.vin || "");

        // Flexible matching for VINs (handling zeros and suffixes)
        let matchedKey: string | null = null;
        for (const [vKey, locValue] of vinToNewLoc.entries()) {
          if (vinMatch(stockVin, vKey)) {
            matchedKey = vKey;
            break;
          }
        }

        if (matchedKey) {
          const newLocation = vinToNewLoc.get(matchedKey);
          if (newLocation && item.location !== newLocation) {
            stockArray[i] = { ...item, location: newLocation };
            hasChanges = true;
          }
        }
      }

      if (hasChanges) {
        tx.update(stateRef, { stock: stockArray });
        console.log("Successfully updated stock locations in transaction.");
      }
    });
  } catch (err) {
    console.error("Error updating stock locations:", err);
    throw err;
  }
};
