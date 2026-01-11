
export const normalizeVin = (vin: string): string => {
  return String(vin || "").trim().toUpperCase().replace(/\s+/g, '');
};

export const stripLeadingZeros = (s: string): string => {
  return normalizeVin(s).replace(/^0+/, '');
};

export const vinMatch = (a: string, b: string): boolean => {
  const A = normalizeVin(a);
  const B = normalizeVin(b);
  if (!A || !B) return false;
  if (A === B) return true;
  
  const A2 = stripLeadingZeros(A);
  const B2 = stripLeadingZeros(B);
  if (!A2 || !B2) return false;
  
  return A2 === B2 || A.endsWith(B2) || B.endsWith(A2);
};

export const formatDate = (ts: any): string => {
  if (!ts) return "—";
  try {
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleString('ar-EG', {
      timeZone: 'Asia/Riyadh',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).replace(',', '');
  } catch (e) {
    return "—";
  }
};
