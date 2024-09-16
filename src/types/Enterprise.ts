export default interface Enterprise{
    id?: string,
    registrationNumber: string,
    taxId: string,
    name: string,
    ownerId: string,
    createdTime: Date,
    documentArchiveId: string,
    AdminId: string[]
}