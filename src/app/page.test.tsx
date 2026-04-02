import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';

describe('Home page', () => {
  it('renders the site title', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('CSS Teach');
  });

  it('renders all 4 topic cards', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: 'Layout' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Selectors' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Typography & Color' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Animations' })).toBeInTheDocument();
  });

  it('links each card to the correct route', () => {
    render(<Home />);
    const links = screen.getAllByRole('listitem');
    const hrefs = links.map(el => el.getAttribute('href'));
    expect(hrefs).toContain('/layout');
    expect(hrefs).toContain('/selectors');
    expect(hrefs).toContain('/typography-color');
    expect(hrefs).toContain('/animations');
  });
});
