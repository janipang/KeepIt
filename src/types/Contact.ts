import { BusinessType, ContactType } from "./enum";

export interface Contact{
    contactID?: string;
    type: ContactType;
    businessType: BusinessType
    businessName: string;
    title: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    email: string;
    taxID: string;
    imgData: string;
}