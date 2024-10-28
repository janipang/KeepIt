export default interface Enterprise {
  id?: string;
  registrationNumber: string;
  name: string;
  branch: string;
  address: string; //businessAddress
  phone: string;
  taxID: string;
  admin?: string;
  accountants?: string[];
  viewers?: string[];
  joiningCode?: JoiningCode;
  logoUrl?: string;
}

export interface JoiningCode {
  code: String;
  codeExpireAt: Date;
}
