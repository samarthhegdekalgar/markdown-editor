import type { FC} from "react";
import React, { useState } from "react";
import './app.css'
import Editor from "./editor";
import {  example2 } from "./example";
import Preview from "./preview";
import { useSyncScroll } from "./hooks/useSyncScroll";
import Menu from "./menu";
import Footer from "./footer";

const App: FC = () => {
  const [doc, setDoc] = useState<string>(example2);
  const [cursorPosition, setCursorPosition] = useState<string>("");
  useSyncScroll()

  return(
    <div className="layout">
      <div className="app">
        <Menu />
        <Editor onChange={(docValue, curPos) => {
          setDoc(docValue)
          setCursorPosition(curPos)
          }} initialDoc={doc}/>
        <Preview doc={doc}/>
      </div>
      <Footer cursorPosition={cursorPosition}/>
    </div>
  )
}

export default App;
