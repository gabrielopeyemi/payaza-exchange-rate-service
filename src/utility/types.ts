export interface ExchangeRate {
    _id?: string; // Optional for new entries
    name: string;
    priceAgainstUSD: number;
    currency: string;
    description: string;
    isActive: boolean;
    countryCode: string;
    USDagainstPrice?: number; // Optional field
  }
  

export enum SCREEN {
  HOME = 'HOME',
  CREATE = 'CREATE',
  UPDATE = 'UPDATE'
}