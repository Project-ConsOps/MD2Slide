import React, { useEffect, useState } from 'react';

type TemplateSelectorProps = {
  onTemplateClick: (templatePath: string) => void;
};

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onTemplateClick }) => {
  const [templates, setTemplates] = useState<string[]>([]);

  useEffect(() => {
    // Vite の import.meta.glob を使用して ./public/templates/ 内の SVG ファイルを取得
    const files = import.meta.glob('../../public/templates/*.svg');

    // パスを整形して ./templates/ の形式に変換
    const templatePaths = Object.keys(files).map((file) => file.replace('/public', ''));

    setTemplates(templatePaths);
  }, []);

  return (
    <div className="w-full flex overflow-x-auto space-x-4 bg-gray-200">
      {templates.map((template) => (
        <img
          key={template}
          src={template}
          alt={template}
          className="w-32 h-32 m-2 cursor-pointer"
          onClick={() => onTemplateClick(template)}
        />
      ))}
    </div>
  );
};

export default TemplateSelector;