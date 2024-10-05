export default interface Enterprise{
    id?: string,
    name: string,
    registrationNumber: string, //businessAddress
    taxId: string,
    AdminId: string[]
    ownerId: string, // remove
    documentArchiveId: string,
    logo?: string;
}