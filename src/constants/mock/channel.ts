import { FinancialChannel } from '@/types/FinancialChannel';

export const financialChannels: FinancialChannel[] = [
  {
    id: 'CHANNEL001MXH0',
    type: 'cash',
    account: {
      id: 'CSH001',
      name: 'ซื้อของสด',
      balance: 10200,
    },
  },
  {
    id: 'CHANNEL002MXH1',
    type: 'bankaccount',
    account: {
      id: 'BNK001',
      bank: 'ธ.กรุงไทย',
      account_type: 'บัญชีออมทรัพย์',
      name: 'ค่าเช่าที่',
      account_number: '6503082237',
      balance: 105000,
    },
  },
  {
    id: 'CHANNEL003MXH2',
    type: 'cash',
    account: {
      id: 'CSH002',
      name: 'ค่าน้ำมัน',
      balance: 42000,
    },
  },
  {
    id: 'CHANNEL004MXH3',
    type: 'bankaccount',
    account: {
      id: 'BNK002',
      bank: 'ธ.ไทยพานิชย์',
      account_type: 'บัญชีกระเเสรายวัน',
      name: 'ขายหนังไก่ทอด',
      account_number: '6512429880',
      balance: 37000,
    },
  },
  {
    id: 'CHANNEL005MXH4',
    type: 'e-wallet',
    account: {
      id: 'EWL001',
      provider_type: 'e-commerce',
      provider: 'True Wallet',
      name: 'tips from live',
      account_number: '1108399781505',
      balance: 2500,
    },
  },
];
