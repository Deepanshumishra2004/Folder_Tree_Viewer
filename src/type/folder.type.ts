export interface FolderNode {
    id : number;
    name : string;
    type : "folder" | "file";
    children?: FolderNode[]
}