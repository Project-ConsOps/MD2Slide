import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import TemplateSelector from './components/TemplateSelector';
import ExportButton from './components/ExportButton';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('default');

  const handleTemplateInsert = (templatePath: string) => {
    const newSlide = `\n![bg](./${templatePath})\n\n---\n`;
    setMarkdown((prev) => prev + newSlide);
    };
  

  return (
    <div className="flex flex-col h-screen">
      {/* テンプレートセレクタ */}
      <div className="flex-shrink-0 bg-gray-100">
        <TemplateSelector onTemplateClick={handleTemplateInsert} />
      </div>

      {/* エクスポートボタン */}
      <ExportButton markdown={markdown} />

      {/* エディタとプレビュー */}
      <div className="flex flex-grow h-full">
        <div className="w-1/2 border-r overflow-y-auto">
            <Editor value={markdown} onChange={setMarkdown} />
        </div>
        <div className="w-1/2 overflow-y-auto">
        <Preview markdown={markdown} />
        </div>
      </div>
    </div>
  );
};

export default App;