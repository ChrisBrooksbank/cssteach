'use client';

import { useState, useCallback } from 'react';

export interface LiveEditorProps {
  initialHtml: string;
  initialCss?: string;
  onChange?: (css: string) => void;
}

function buildSrcDoc(html: string, css: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; }
  body { margin: 0; padding: 12px; font-family: sans-serif; }
</style>
<style id="user-css">${css}</style>
</head>
<body>${html}</body>
</html>`;
}

export default function LiveEditor({ initialHtml, initialCss = '', onChange }: LiveEditorProps) {
  const [css, setCss] = useState(initialCss);

  const handleChange = useCallback(
    (value: string) => {
      setCss(value);
      onChange?.(value);
    },
    [onChange]
  );

  return (
    <div className="flex h-full min-h-64 flex-col gap-2 sm:flex-row">
      <div className="flex flex-1 flex-col gap-1">
        <label className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
          CSS
        </label>
        <textarea
          aria-label="CSS editor"
          value={css}
          onChange={e => handleChange(e.target.value)}
          spellCheck={false}
          className="flex-1 resize-none rounded-lg border border-zinc-200 bg-zinc-50 p-3 font-mono text-sm text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-500"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <label className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
          Preview
        </label>
        <iframe
          title="CSS preview"
          srcDoc={buildSrcDoc(initialHtml, css)}
          sandbox="allow-same-origin"
          className="flex-1 rounded-lg border border-zinc-200 bg-white dark:border-zinc-700"
        />
      </div>
    </div>
  );
}
