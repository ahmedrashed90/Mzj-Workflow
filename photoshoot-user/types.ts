
export enum RequestType {
  SHOOT = 'shoot',
  MOVE = 'move',
  MIXED = 'mixed'
}

export enum RequestStatus {
  PENDING = 'تحت المتابعة',
  COMPLETED = 'مكتملة'
}

export interface StepInfo {
  at?: any;
  byUid?: string;
  byEmail?: string;
  byName?: string;
}

export interface RequestSteps {
  received?: StepInfo;
  sent?: StepInfo;
  carReceived?: StepInfo;
}

export interface RequestRow {
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
  steps?: RequestSteps;
  __id?: string;
}

export interface UserProfile {
  name: string;
  role: string;
  locations: string[];
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
