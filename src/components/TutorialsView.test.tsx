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
    expect(screen.getByRole('heading', { name: 'CSS Grid' })).toBeInTheDocument();
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
    // Query within <code> elements to avoid matching syntax-highlighted spans
    const conceptTags = screen.getAllByRole('listitem');
    const tagTexts = conceptTags.map(el => el.textContent);
    expect(tagTexts).toContain('display: flex');
    expect(tagTexts).toContain('flex-direction');
    expect(tagTexts).toContain('flex-wrap');
    expect(tagTexts).toContain('flex-grow');
  });

  it('renders a LiveEditor for each lesson', () => {
    render(<TutorialsView groups={layoutTutorials} />);
    const editors = screen.getAllByRole('textbox', { name: /css editor/i });
    const totalLessons = layoutTutorials.reduce((sum, g) => sum + g.lessons.length, 0);
    expect(editors).toHaveLength(totalLessons);
  });

  it('pre-populates each editor with lesson CSS', () => {
    render(<TutorialsView groups={layoutTutorials} />);
    const editors = screen.getAllByRole('textbox', { name: /css editor/i });
    expect((editors[0] as HTMLTextAreaElement).value).toContain('display: flex');
    expect((editors[1] as HTMLTextAreaElement).value).toContain('flex-wrap');
  });

  it('renders CSS Grid lesson titles', () => {
    render(<TutorialsView groups={layoutTutorials} />);
    expect(screen.getByRole('heading', { name: 'Grid Basics' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Placement & Spanning' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Responsive Layouts' })).toBeInTheDocument();
  });

  it('renders CSS Grid concept tags', () => {
    render(<TutorialsView groups={layoutTutorials} />);
    const conceptTags = screen.getAllByRole('listitem');
    const tagTexts = conceptTags.map(el => el.textContent);
    expect(tagTexts).toContain('display: grid');
    expect(tagTexts).toContain('grid-template-columns');
    expect(tagTexts).toContain('grid-template-areas');
    expect(tagTexts).toContain('minmax()');
  });

  it('pre-populates Grid editors with lesson CSS', () => {
    render(<TutorialsView groups={layoutTutorials} />);
    const editors = screen.getAllByRole('textbox', { name: /css editor/i });
    // editors 2, 3, 4 are Grid lessons
    expect((editors[2] as HTMLTextAreaElement).value).toContain('display: grid');
    expect((editors[3] as HTMLTextAreaElement).value).toContain('grid-template-areas');
    expect((editors[4] as HTMLTextAreaElement).value).toContain('auto-fill');
  });
});
