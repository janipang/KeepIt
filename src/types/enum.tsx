//////////////////////////////
// User and Account Related //
//////////////////////////////

enum NameTitle {
  MALE = 'นาย',
  FEMALE = 'นาง',
  SINGLE_FEMALE = 'นางสาว',
  NOT_SPECIFIED = 'ไม่ระบุ',
}

enum BusinessRole {
  BUSINESS_ADMIN = 'admin',
  ACCOUNTANT = 'accountant',
  VIEWER = 'viewer',
}

//////////////////////
// Document Related //
//////////////////////

enum DocumentStatus {
  DRAFT = 'ร่าง',
  WAIT_FOR_RESPONSE = 'รอตอบกลับ',
  COMPLETED = 'เสร็จสิ้น',
  EXPIRED = 'หมดอายุ',
}

// enum DocumentType  {
//     QUOTATION= 1,
//     INVOICE= 2,
//     TAX_INVOICE= 3,
//     RECEIPT= 4,
//     PURCHASE_ORDER= 5
// };

//////////////////
// Item Related //
//////////////////

enum ItemType {
  PRODUCT = 'สินค้า',
  SERVICE = 'บริการ',
}

/////////////////////////
// Transaction Related //
/////////////////////////

// regard the status of transaction = it is not certain for now if a transaction could be modify in someway
enum TransactionStatus {
  FINISHED = 'สำเร็จแล้ว',
  UNFINISHED = 'ยังไม่สำเร็จ',
}

enum TransactionType {
  INCOME = 'รายรับ',
  EXPENSE = 'รายจ่าย',
}

enum BankAccountType {
  CURRENT = 'กระแสรายวัน',
  SAVING = 'กระแสออมทรัพย์',
  FIXED_DEPOSIT = 'ฝากประจำ',
}

enum FinancialChannelProviderType {
  BANK = 'บัญชีธนาคาร',
  EWALLET = 'Ewallet',
}

///////////////////////
// Contactor Related //
///////////////////////

enum ContactType {
  CLIENT = 'ลูกค้า',
  SUPPLIER = 'ผู้ขาย',
}

////////////
// Others //
////////////

enum BusinessType {
  COOPERATE = 'นิติบุคคล',
  INDIVIDUAL = 'บุคคลธรรมดา',
}

export {
  NameTitle,
  BusinessRole,
  DocumentStatus,
  ItemType,
  TransactionStatus,
  TransactionType,
  BankAccountType,
  FinancialChannelProviderType,
  ContactType,
  BusinessType,
};
