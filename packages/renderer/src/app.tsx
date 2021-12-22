import type { FC} from "react";
import React, { useState } from "react";
import './app.css'
import Editor from "./editor";
import { example } from "./example";
import Preview from "./preview";


const App: FC = () => {
  const [doc, setDoc] = useState<string>(example);

  return(
    <div className="app">
      <Editor onChange={setDoc} initialDoc={doc}/>
      <Preview doc={doc}/>
    </div>
  )
}

export default App;
