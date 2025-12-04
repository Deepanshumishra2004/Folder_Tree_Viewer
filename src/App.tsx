import { TreeNode } from "./components/TreeNode/TreeNode"
import { folderData } from "./data/folderData"
import "./components/TreeNode/TreeNode.scss"; 

function App() {

  return (
    <div style={{ padding : 20 }}>
      <h1>Folder Tree viewer</h1>
      {folderData.map(node=>(
        <TreeNode key={node.id} folderData={node}/>
      ))}
    </div>
  )
}

export default App
