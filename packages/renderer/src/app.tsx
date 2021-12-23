import type { FC} from "react";
import { useEffect} from "react";
import React, { useState } from "react";
import './app.css'
import Editor from "./editor";
import {  example2 } from "./example";
import Preview from "./preview";
import { useSyncScroll } from "./hooks/useSyncScroll";


const App: FC = () => {
  const [doc, setDoc] = useState<string>(example2);
  useSyncScroll()

  return(
    <div className="app">
      <Editor onChange={setDoc} initialDoc={doc}/>
      <Preview doc={doc}/>
    </div>
  )
}

export default App;
