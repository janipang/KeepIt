export interface FinancialChannel{
  id?: string;
  type: "cash" | "bankaccount" | "e-wallet";
  account: CashAccount | BankAccount | EWallet;
}

export interface CashAccount{
  id?: string;
  name: string;
  balance: number;
}

export interface BankAccount{
  id?: string;
  bank: string; //SCB, KBANK, TTB, KTB
  account_type: string; //กระแสเงินสด, ฝากประจำ
  name: string;
  account_number: string;
  balance: number;
}

export interface EWallet{
  id?: string;
  provider_type: string; //ผู้ให้บริการรับชำระเงิน, e-commerce  //have?
  provider: string; //True Wallet, LINE Pay, Paypal
  name: string;
  account_number: string;
  balance: number;
}