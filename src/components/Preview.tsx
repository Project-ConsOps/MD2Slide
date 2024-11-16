import React from 'react';
import { Marp } from '@marp-team/marp-core';

type PreviewProps = {
  markdown: string;
  template: string;
};

const Preview: React.FC<PreviewProps> = ({ markdown, template }) => {
  const marp = new Marp({ html: true });
  const { html, css } = marp.render(`---\ntheme: ${template}\n---\n${markdown}`);

  return (
    <div
      className="h-full overflow-y-auto p-4"
      dangerouslySetInnerHTML={{ __html: `<style>${css}</style>${html}` }}
    />
  );
};

export default Preview;