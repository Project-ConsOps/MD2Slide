import React from 'react';
import { Marp } from '@marp-team/marp-core';
import { saveAs } from 'file-saver';

type ExportButtonProps = {
  markdown: string;
};

const ExportButton: React.FC<ExportButtonProps> = ({ markdown }) => {
  const handleExportHTML = async () => {

    const marp = new Marp({ html: true });
    const { html } = marp.render(markdown);
    
    const fullHtml = `
      <html>
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
          <pre>${markdown}</pre>
        </body>
      </html>
    `;

    const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
    saveAs(blob, 'presentation.html');
  };

  return (
    <button className="button" onClick={handleExportHTML}>
        Export to HTML
    </button>  );
};

export default ExportButton;