import React from 'react';
import MonacoEditor from '@monaco-editor/react';

type EditorProps = {
  value: string;
  onChange: (value: string) => void;
};

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <div style={{ height: '100%', overflowY: 'auto' }}>
      <MonacoEditor
        height="100%"
        defaultLanguage="markdown"
        value={value}
        onChange={(value) => onChange(value || '')}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          wordWrap: 'on',
          fontSize: 14,
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
};

export default Editor;