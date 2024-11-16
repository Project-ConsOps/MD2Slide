import React from 'react';
import { Marp } from '@marp-team/marp-core';
import { saveAs } from 'file-saver';

type ExportButtonProps = {
  markdown: string;
  template: string;
};

const ExportButton: React.FC<ExportButtonProps> = ({ markdown, template }) => {
  const handleExportHTML = async () => {
    // Marp インスタンスを作成
    const marp = new Marp({ html: true });
    const { html, css } = marp.render(`---\ntheme: ${template}\n---\n${markdown}`);

    // HTML ドキュメントを構築
    const fullHtml = `
      <html>
        <head>
          <meta charset="UTF-8">
          <style>${css}</style>
        </head>
        <body>${html}</body>
      </html>
    `;

    // Blob を作成し、ファイルとして保存
    const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
    saveAs(blob, 'presentation.html');
  };

  return (
    <div className="text-center my-3">
      <button className="btn btn-primary" onClick={handleExportHTML}>
        Export to HTML
      </button>
    </div>
  );
};

export default ExportButton;