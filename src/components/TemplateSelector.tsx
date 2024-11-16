import React from 'react';

type TemplateSelectorProps = {
  onSelect: (template: string) => void;
};

const templates = [
  { id: 'default', src: '/templates/template1.svg' },
];

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onSelect }) => {
  return (
    <div className="w-full flex overflow-x-auto space-x-4 p-4 bg-gray-200">
      {templates.map((template) => (
        <img
          key={template.id}
          src={template.src}
          alt={template.id}
          className="w-40 h-40 object-contain border rounded cursor-pointer hover:scale-105 transition-transform"
          onClick={() => onSelect(template.id)}
        />
      ))}
    </div>
  );
};

export default TemplateSelector;