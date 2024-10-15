export interface Contact{
    id?: string;
    group: "customer" | "provider" | "unknown";
    type: "personal" | "enterprise";
    name: string;
    address: string;
    phone: string;
    email: string;
    entpId?: string;
    headquarter?: "headquarter" | "branch" | "unknown";
}

export interface ProductInfo{
    id?: string;
    name: string;
    description: string;
    type: "product" | "service";
    unit: string; //กิโล, ชิ้น, ห้อง ,จาน, กระปุก, ถุง //change to unit type
    image: string;
    sell_price: number; //change to price
    buy_price: number; //remove
    amount?: number; //service should not have amount
}

export interface FinancialChannel{
    id?: string;
    type: "cash" | "bankaccount" | "e-wallet";
    account: CashAccount | BankAccount | EWallet;
}

export interface CashAccount{
    id?: string;
    balance: number;
}

export interface BankAccount{
    id?: string;
    bank: string; //SCB, KBANK, TTB, KTB
    type: string; //กระแสเงินสด, ฝากประจำ
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