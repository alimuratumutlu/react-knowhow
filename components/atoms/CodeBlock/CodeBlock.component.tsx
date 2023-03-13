import React from 'react';

import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

interface codeBlockProps {
  children: string;
}

export default function CodeBlock({ children }: codeBlockProps) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      showLineNumbers
      wrapLongLines
      customStyle={{ borderRadius: 7 }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
