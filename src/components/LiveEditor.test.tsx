import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LiveEditor from './LiveEditor';

describe('LiveEditor', () => {
  it('renders CSS editor textarea', () => {
    render(<LiveEditor initialHtml="<p>hello</p>" />);
    expect(screen.getByRole('textbox', { name: /css editor/i })).toBeInTheDocument();
  });

  it('renders preview iframe', () => {
    render(<LiveEditor initialHtml="<p>hello</p>" />);
    expect(screen.getByTitle('CSS preview')).toBeInTheDocument();
  });

  it('populates textarea with initialCss', () => {
    render(<LiveEditor initialHtml="<p>hi</p>" initialCss="body { color: red; }" />);
    const textarea = screen.getByRole('textbox', { name: /css editor/i });
    expect(textarea).toHaveValue('body { color: red; }');
  });

  it('updates textarea value on user input', () => {
    render(<LiveEditor initialHtml="<p>hi</p>" />);
    const textarea = screen.getByRole('textbox', { name: /css editor/i });
    fireEvent.change(textarea, { target: { value: 'p { color: blue; }' } });
    expect(textarea).toHaveValue('p { color: blue; }');
  });

  it('calls onChange when CSS changes', () => {
    const onChange = vi.fn();
    render(<LiveEditor initialHtml="<p>hi</p>" onChange={onChange} />);
    const textarea = screen.getByRole('textbox', { name: /css editor/i });
    fireEvent.change(textarea, { target: { value: 'p { font-size: 2rem; }' } });
    expect(onChange).toHaveBeenCalledWith('p { font-size: 2rem; }');
  });

  it('iframe is sandboxed', () => {
    render(<LiveEditor initialHtml="<p>hi</p>" />);
    const iframe = screen.getByTitle('CSS preview');
    expect(iframe).toHaveAttribute('sandbox', 'allow-same-origin');
  });

  it('iframe srcDoc contains the initial HTML', () => {
    render(<LiveEditor initialHtml='<div class="box">test</div>' />);
    const iframe = screen.getByTitle('CSS preview');
    expect(iframe.getAttribute('srcdoc')).toContain('<div class="box">test</div>');
  });
});
