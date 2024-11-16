import React from 'react';
import { saveAs } from 'file-saver';
import Marpit from '@marp-team/marpit';

type ExportButtonProps = {
  markdown: string;
  template: string;
};

const ExportButton: React.FC<ExportButtonProps> = ({ markdown, template }) => {
  const handleExportHTML = () => {
    // Marpit インスタンスを作成
    const marpit = new Marpit({
      html: true,
      container: template || 'div',
    });

    // Markdown を HTML に変換
    const { html, css } = marpit.render(markdown);

    // 完全な HTML ドキュメントとして構築
    const fullHtml = `
      <html>
      <head>
        <style>${css}</style>
      </head>
      <body>${html}</body>
      </html>
    `;

    // Blob を作成し、ダウンロード
    const blob = new Blob([fullHtml], { type: 'text/html' });
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