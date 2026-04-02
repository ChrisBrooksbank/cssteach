import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TutorialsView from './TutorialsView';
import { layoutTutorials } from '@/data/layout';

describe('TutorialsView', () => {
  it('shows a message when no groups are provided', () => {
    render(<TutorialsView groups={[]} />);
    expect(screen.getByText(/no tutorials available/i)).toBeInTheDocument();
  });

  it('renders group headings', () => {
    render(<TutorialsView groups={layoutTutorials} />);
    expect(screen.getByRole('heading', { name: 'Flexbox' })).toBeInTheDocument();
  });

  it('renders lesson titles', () => {
    render(<TutorialsView groups={layoutTutorials} />);
    expect(screen.getByRole('heading', { name: 'Flexbox Basics' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Wrapping & Sizing' })).toBeInTheDocument();
  });

  it('renders lesson descriptions', () => {
    render(<TutorialsView groups={layoutTutorials} />);
    expect(
      screen.getByText('Make a container flexible. Items line up in a row by default.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Control how items wrap and how much space they take.')
    ).toBeInTheDocument();
  });

  it('renders concept tags for each lesson', () => {
    render(<TutorialsView groups={layoutTutorials} />);
    expect(screen.getByText('display: flex')).toBeInTheDocument();
    expect(screen.getByText('flex-direction')).toBeInTheDocument();
    expect(screen.getByText('flex-wrap')).toBeInTheDocument();
    expect(screen.getByText('flex-grow')).toBeInTheDocument();
  });

  it('renders a LiveEditor for each lesson', () => {
    render(<TutorialsView groups={layoutTutorials} />);
    const editors = screen.getAllByRole('textbox', { name: /css editor/i });
    expect(editors).toHaveLength(layoutTutorials[0].lessons.length);
  });

  it('pre-populates each editor with lesson CSS', () => {
    render(<TutorialsView groups={layoutTutorials} />);
    const editors = screen.getAllByRole('textbox', { name: /css editor/i });
    expect((editors[0] as HTMLTextAreaElement).value).toContain('display: flex');
    expect((editors[1] as HTMLTextAreaElement).value).toContain('flex-wrap');
  });
});
