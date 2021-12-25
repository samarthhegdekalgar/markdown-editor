import React, {  useEffect } from 'react';
import useCodeMirror from './useCodemirror';
import './editor.css'
import type { EditorState } from '@codemirror/state';

interface Props {
  initialDoc: string;
  onChange: (doc: string, cursorPosition: string) => void;
}

function getCursorTooltips(state: EditorState): string {
  const cursorPosition =  state.selection.ranges
    .filter(range => range.empty)
    .map(range => {
      const line = state.doc.lineAt(range.head)
      const  text = `Ln ${line.number}, Col ${(range.head - line.from)}`
      return text
    }).join(',')
  const selectedTexts = state.selection.ranges
  .map(range => {
    const line = state.doc.lineAt(range.head)
    const  text = `Ln ${line.number}, Col ${(range.head - line.from)} (${range.to - range.from} selected)`
    return text
  }).join(',')
  return cursorPosition || selectedTexts
}
const Editor: React.FC<Props> = (props) => {
  const { initialDoc, onChange } = props;
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: (value) => {
      const cursorPosition = getCursorTooltips(value)
      onChange(value.doc.toString(), cursorPosition)
    }
  })

  useEffect(() => {
if(editorView) {
  // do nothing
}
  }, [editorView])
  return <div id="edit-area" className="editor-wrapper" ref={refContainer}></div>;
}

export default Editor;
