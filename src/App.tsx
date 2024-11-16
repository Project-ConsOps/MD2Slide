import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import TemplateSelector from './components/TemplateSelector';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('default');

  return (
    <div className="flex flex-col h-screen">
      {/* テンプレートセレクタ */}
      <div className="flex-shrink-0 bg-gray-100">
        <TemplateSelector onSelect={setSelectedTemplate} />
      </div>
      {/* エディタとプレビューのセクション */}
      <div className="flex flex-grow h-hull">
        {/* エディタ部分 */}
        <div className="w-1/2 border-r overflow-y-auto h-hull">
          <Editor value={markdown} onChange={setMarkdown} />
        </div>
        {/* プレビュー部分 */}
        <div className="w-1/2 overflow-y-auto h-hull">
          <Preview markdown={markdown} template={selectedTemplate} />
        </div>
      </div>
    </div>
  );
};

export default App;