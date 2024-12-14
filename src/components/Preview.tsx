import React from 'react';
import { Marp } from '@marp-team/marp-core';
import fs from 'fs';
import path from 'path';

type PreviewProps = {
  markdown: string;
};

const Preview: React.FC<PreviewProps> = ({ markdown }) => {
  // Marpit インスタンスの作成
  const marp = new Marp({ 
    html: true,
    });

  // Markdown を HTML に変換
  const { html, css } = marp.render(markdown);

  // カスタムスタイルを追加
  const customStyles = `
    .preview-container section {
      border: 2px solid #ccc; /* 枠線を追加 */
      background-color: #f5f5f5; /* 背景色をグレーに設定 */
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .preview-container svg {
      display: block;
      margin: auto;
    }

    .preview-container svg foreignObject {
      width: 100%;
      height: 100%;
    }

    .preview-container svg foreignObject section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  `;

  return (
    <div className="preview-container h-full overflow-y-auto p-4">
      {/* Marpit のデフォルトの CSS を挿入 */}
      <style>{css}</style>
      {/* カスタムスタイルを挿入 */}
      <style>{customStyles}</style>
      {/* 変換された HTML を挿入 */}
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default Preview;