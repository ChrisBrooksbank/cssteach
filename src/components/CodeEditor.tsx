'use client';

import { useRef, useCallback } from 'react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  ariaLabel?: string;
  rows?: number;
}

function highlightCSS(code: string): string {
  const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return (
    escaped
      // Comments
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="ce-comment">$1</span>')
      // Strings
      .replace(
        /(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;|'[^']*'|"[^"]*")/g,
        '<span class="ce-string">$1</span>'
      )
      // Properties (word before colon, inside a block)
      .replace(
        /\b([\w-]+)(\s*:)/g,
        '<span class="ce-property">$1</span><span class="ce-punct">$2</span>'
      )
      // Values — numbers with units
      .replace(/:\s*([^;{}&<]*)/g, match =>
        match.replace(
          /\b(\d+\.?\d*)(px|em|rem|%|vh|vw|s|ms|deg|fr|ch|ex|vmin|vmax)\b/g,
          '<span class="ce-number">$1$2</span>'
        )
      )
      // Braces
      .replace(/([{}])/g, '<span class="ce-brace">$1</span>')
      // Semicolons
      .replace(/;/g, '<span class="ce-punct">;</span>')
  );
}

function getLineNumbers(code: string): string {
  const lines = code.split('\n');
  return lines.map((_, i) => i + 1).join('\n');
}

export default function CodeEditor({ value, onChange, id, ariaLabel, rows = 10 }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  const handleScroll = useCallback(() => {
    if (textareaRef.current && preRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop;
      preRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  }, []);

  const lineHeight = 1.5;
  const height = `${rows * lineHeight}rem`;

  return (
    <div className="code-editor relative flex overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 transition-colors focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-400/20 dark:border-zinc-700 dark:bg-zinc-900 dark:focus-within:border-indigo-500 dark:focus-within:ring-indigo-500/20">
      {/* Line numbers */}
      <div
        className="flex-none select-none border-r border-zinc-200 bg-zinc-100 px-2 py-3 text-right font-mono text-xs leading-[1.5] text-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-600"
        aria-hidden="true"
        style={{ height }}
      >
        <pre className="m-0 overflow-hidden">{getLineNumbers(value)}</pre>
      </div>

      {/* Editor area */}
      <div className="relative min-w-0 flex-1">
        {/* Syntax-highlighted layer */}
        <pre
          ref={preRef}
          className="pointer-events-none absolute inset-0 m-0 overflow-hidden whitespace-pre-wrap break-words p-3 font-mono text-sm leading-[1.5] text-zinc-900 dark:text-zinc-100"
          aria-hidden="true"
          style={{ height }}
          dangerouslySetInnerHTML={{ __html: highlightCSS(value) + '\n' }}
        />

        {/* Textarea (transparent text, visible caret) */}
        <textarea
          ref={textareaRef}
          id={id}
          aria-label={ariaLabel}
          value={value}
          onChange={e => onChange(e.target.value)}
          onScroll={handleScroll}
          spellCheck={false}
          className="relative m-0 block w-full resize-none bg-transparent p-3 font-mono text-sm leading-[1.5] text-transparent caret-zinc-900 outline-none dark:caret-zinc-100"
          style={{ height }}
        />
      </div>
    </div>
  );
}
