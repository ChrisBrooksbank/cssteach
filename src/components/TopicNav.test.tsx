import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

import { usePathname } from 'next/navigation';
import TopicNav from './TopicNav';

describe('TopicNav', () => {
  it('renders all three tab links', () => {
    vi.mocked(usePathname).mockReturnValue('/layout');
    render(<TopicNav topic="layout" />);
    expect(screen.getByRole('link', { name: 'Tutorials' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Reference' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Challenges' })).toBeInTheDocument();
  });

  it('links to the correct paths for a topic', () => {
    vi.mocked(usePathname).mockReturnValue('/layout');
    render(<TopicNav topic="layout" />);
    expect(screen.getByRole('link', { name: 'Tutorials' })).toHaveAttribute(
      'href',
      '/layout/tutorials'
    );
    expect(screen.getByRole('link', { name: 'Reference' })).toHaveAttribute(
      'href',
      '/layout/reference'
    );
    expect(screen.getByRole('link', { name: 'Challenges' })).toHaveAttribute(
      'href',
      '/layout/challenges'
    );
  });

  it('marks the active tab with aria-current="page"', () => {
    vi.mocked(usePathname).mockReturnValue('/layout/tutorials');
    render(<TopicNav topic="layout" />);
    expect(screen.getByRole('link', { name: 'Tutorials' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Reference' })).not.toHaveAttribute('aria-current');
    expect(screen.getByRole('link', { name: 'Challenges' })).not.toHaveAttribute('aria-current');
  });

  it('marks the reference tab as active when on reference path', () => {
    vi.mocked(usePathname).mockReturnValue('/selectors/reference');
    render(<TopicNav topic="selectors" />);
    expect(screen.getByRole('link', { name: 'Reference' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Tutorials' })).not.toHaveAttribute('aria-current');
  });

  it('uses the correct topic slug in hrefs', () => {
    vi.mocked(usePathname).mockReturnValue('/animations');
    render(<TopicNav topic="animations" />);
    expect(screen.getByRole('link', { name: 'Tutorials' })).toHaveAttribute(
      'href',
      '/animations/tutorials'
    );
  });

  it('no tab is active when on the base topic page', () => {
    vi.mocked(usePathname).mockReturnValue('/layout');
    render(<TopicNav topic="layout" />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).not.toHaveAttribute('aria-current');
    });
  });
});
