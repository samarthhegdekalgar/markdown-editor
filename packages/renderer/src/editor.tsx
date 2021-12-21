import React, { useCallback, useEffect } from 'react';
import useCodeMirror from './useCodemirror';

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}
const Editor: React.FC<Props> = (props) => {
  const { initialDoc, onChange } = props;
  const handleChange = useCallback((state) => onChange(state.doc.toString()), [onChange]);
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: 'Hello World',
    onChange: () => handleChange
  })

  useEffect(() => {
if(editorView) {
  // do nothing
}
  }, [editorView])
  return <div className="editor-wrapper" ref={refContainer}>{initialDoc}</div>;
}

export default Editor;
