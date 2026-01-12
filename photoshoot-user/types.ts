
export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  role: string;
  locations: string[];
}

export interface StepInfo {
  at: any;
  byUid: string;
  byEmail: string;
  byName: string;
}

export interface RequestRow {
  __id?: string;
  vin: string;
  kind: 'shoot' | 'move';
  car: string;
  variant: string;
  extColor: string;
  intColor: string;
  modelYear: string;
  location: string;
  fromLocation: string;
  shootPlace?: string;
  toLocation?: string;
  note?: string;
  steps: {
    received?: StepInfo;
    sent?: StepInfo;
    carReceived?: StepInfo;
  };
  updatedAt?: any;
}

export interface PhotoshootRequest {
  id: string;
  kind: 'shoot' | 'move' | 'mixed';
  status: string;
  createdAt: any;
  updatedAt: any;
  createdByUid: string;
  createdByEmail: string;
  createdByName: string;
  total: number;
  shootDate?: string;
  notes?: string;
  vins: string[];
  finishedAt?: any;
  finishedByEmail?: string;
  finishedByName?: string;
}

export interface StockItem {
  vin: string;
  car: string;
  variant: string;
  extColor: string;
  intColor: string;
  modelYear: string;
  location: string;
}

export enum UserRole {
  ADMIN = 'الادارة',
  IDARI = 'اداري',
  BRANCH = 'مدراء فروع',
}
