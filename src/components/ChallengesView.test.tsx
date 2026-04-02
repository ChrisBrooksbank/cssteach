import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ChallengesView from './ChallengesView';
import { layoutChallenges } from '@/data/layout';

describe('ChallengesView', () => {
  it('shows a message when no challenges are provided', () => {
    render(<ChallengesView challenges={[]} />);
    expect(screen.getByText(/no challenges available/i)).toBeInTheDocument();
  });

  it('renders all challenge titles', () => {
    render(<ChallengesView challenges={layoutChallenges} />);
    expect(screen.getByRole('heading', { name: 'Center an Element' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Build a Navigation Bar' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Build a Card Grid' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Holy Grail Layout' })).toBeInTheDocument();
  });

  it('renders challenge descriptions', () => {
    render(<ChallengesView challenges={layoutChallenges} />);
    expect(screen.getByText(/use flexbox to center the box/i)).toBeInTheDocument();
    expect(screen.getByText(/brand name sits on the left/i)).toBeInTheDocument();
  });

  it('renders a target iframe and a preview iframe for each challenge', () => {
    render(<ChallengesView challenges={layoutChallenges} />);
    const targetFrames = screen.getAllByTitle(/target for/i);
    const previewFrames = screen.getAllByTitle(/preview for/i);
    expect(targetFrames).toHaveLength(layoutChallenges.length);
    expect(previewFrames).toHaveLength(layoutChallenges.length);
  });

  it('renders a CSS editor pre-populated with starting CSS for each challenge', () => {
    render(<ChallengesView challenges={layoutChallenges} />);
    const editors = screen.getAllByRole('textbox');
    expect(editors).toHaveLength(layoutChallenges.length);
    expect((editors[0] as HTMLTextAreaElement).value).toContain('Make this a flex container');
  });

  it('renders check labels for each challenge', () => {
    render(<ChallengesView challenges={layoutChallenges} />);
    expect(screen.getByText('Container uses display: flex')).toBeInTheDocument();
    expect(screen.getByText('Navbar uses display: flex')).toBeInTheDocument();
    expect(screen.getByText('Grid uses display: grid')).toBeInTheDocument();
    expect(screen.getByText('Page uses display: grid')).toBeInTheDocument();
  });

  it('shows failing checks initially for centering challenge', () => {
    render(<ChallengesView challenges={[layoutChallenges[0]]} />);
    // Starting CSS lacks display: flex on .container, so checks fail
    const items = screen.getAllByRole('listitem');
    expect(items[0].textContent).toContain('Container uses display: flex');
    // Check indicator should show ○ (failing)
    expect(items[0].textContent).toContain('○');
  });

  it('marks a check as passed when correct CSS is entered', () => {
    render(<ChallengesView challenges={[layoutChallenges[0]]} />);
    const editor = screen.getByRole('textbox');
    fireEvent.change(editor, {
      target: {
        value: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
}
.box { width: 80px; height: 80px; background: #6366f1; }`,
      },
    });
    // All three checks should now pass
    const items = screen.getAllByRole('listitem');
    items.forEach(item => {
      expect(item.textContent).toContain('✓');
    });
  });

  it('shows "All checks passed!" when all checks pass', () => {
    render(<ChallengesView challenges={[layoutChallenges[0]]} />);
    const editor = screen.getByRole('textbox');
    fireEvent.change(editor, {
      target: {
        value: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
}
.box { width: 80px; }`,
      },
    });
    expect(screen.getByRole('status')).toHaveTextContent(/all checks passed/i);
  });

  it('does not show "All checks passed!" when checks are incomplete', () => {
    render(<ChallengesView challenges={[layoutChallenges[0]]} />);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
});
