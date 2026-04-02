'use client';

import { useState, useCallback } from 'react';
import { buildSrcDoc } from '@/lib/buildSrcDoc';
import CodeEditor from '@/components/CodeEditor';

export interface LiveEditorProps {
  initialHtml: string;
  initialCss?: string;
  onChange?: (css: string) => void;
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
        <CodeEditor value={css} onChange={handleChange} ariaLabel="CSS editor" rows={8} />
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
