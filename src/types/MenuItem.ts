export default interface MenuItem{
    id: number;
    name: string;
    path: string;
    child: MenuItem[];
}