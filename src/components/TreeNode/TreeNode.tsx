import { useState } from "react"
import type { FolderNode } from "../../type/folder.type"
import { FolderIcon } from "../Icons/FolderIcon";
import { FileIcon } from "../Icons/FileIcon";
import "./TreeNode.scss"; 

interface Props {
    folderData : FolderNode
}

export function TreeNode ({folderData} : Props){
    const [ open, setOpen] = useState(false);
    
    const isFolder = folderData.type === "folder";

    return <div className="tree-node">
        <div className={`node-label ${isFolder ? "folder" : "file"}`} onClick={()=> isFolder && setOpen(!open)}>
            {isFolder ?  <FolderIcon/> : <FileIcon/>} {folderData.name}
        </div>
        {isFolder  && open && (
            <div className="children">
                {folderData.children?.map(s=>(
                    <TreeNode key={s.id} folderData={s} />
                ))}
            </div>
        )}
    </div>
}