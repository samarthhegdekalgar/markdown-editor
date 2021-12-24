import React, { useCallback, useEffect } from 'react';
import useCodeMirror from './useCodemirror';
import './editor.css'

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}
const Editor: React.FC<Props> = (props) => {
  const { initialDoc, onChange } = props;
  const handleChange = useCallback((state) => onChange(state.doc.toString()), [onChange]);
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: (value) => handleChange(value)
  })

  useEffect(() => {
if(editorView) {
  // do nothing

}
  }, [editorView])
  return <div id="edit-area" className="editor-wrapper" ref={refContainer}></div>;
}

export default Editor;
