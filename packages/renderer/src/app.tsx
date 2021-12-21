import type { FC} from "react";
import React, { useState } from "react";
import './app.css'
import Editor from "./editor";
import Preview from "./preview";

const App: FC = () => {
  const [doc, setDoc] = useState<string>('');
  return(
    <div className="app">
      <Editor onChange={setDoc} initialDoc={doc}/>
      <Preview />
    </div>
  )
}

export default App;
