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