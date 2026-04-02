import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ReferenceView from './ReferenceView';
import { layoutReference } from '@/data/layout';

describe('ReferenceView', () => {
  it('shows a message when no sections are provided', () => {
    render(<ReferenceView sections={[]} />);
    expect(screen.getByText(/no reference available/i)).toBeInTheDocument();
  });

  it('renders section headings', () => {
    render(<ReferenceView sections={layoutReference} />);
    expect(screen.getByRole('heading', { name: 'Flexbox Properties' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Grid Properties' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Common Layout Patterns' })).toBeInTheDocument();
  });

  it('renders property names as code elements', () => {
    render(<ReferenceView sections={layoutReference} />);
    expect(screen.getByText('justify-content')).toBeInTheDocument();
    expect(screen.getByText('align-items')).toBeInTheDocument();
    expect(screen.getByText('grid-template-columns')).toBeInTheDocument();
  });

  it('renders card descriptions', () => {
    render(<ReferenceView sections={layoutReference} />);
    expect(screen.getByText(/aligns items along the main axis/i)).toBeInTheDocument();
    expect(screen.getByText(/aligns items along the cross axis/i)).toBeInTheDocument();
  });

  it('renders value tags for property cards', () => {
    render(<ReferenceView sections={layoutReference} />);
    expect(screen.getAllByText('flex-start').length).toBeGreaterThan(0);
    expect(screen.getByText('space-between')).toBeInTheDocument();
    expect(screen.getByText('repeat(3, 1fr)')).toBeInTheDocument();
  });

  it('renders demo iframes for each card', () => {
    render(<ReferenceView sections={layoutReference} />);
    const iframes = screen.getAllByTitle(/demo for/i);
    const totalCards = layoutReference.reduce((sum, s) => sum + s.cards.length, 0);
    expect(iframes).toHaveLength(totalCards);
  });

  it('renders pattern cards in the patterns section', () => {
    render(<ReferenceView sections={layoutReference} />);
    expect(screen.getByText('Holy Grail')).toBeInTheDocument();
    expect(screen.getByText('Sidebar Layout')).toBeInTheDocument();
    expect(screen.getByText('Card Grid')).toBeInTheDocument();
  });
});
