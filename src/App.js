import { useState } from "react";
import "./styles.css";
import explorer from "./folderData.js";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree.js";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  //console.log(explorerData);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}
