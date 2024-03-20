import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './index';

describe('Modal Component', () => {
  test('renders modal with title and content', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => { }} title="Test Modal" padding="10px">
        <p>Modal Content</p>
      </Modal>
    );

    expect(getByText('Test Modal')).toBeInTheDocument();
    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  test('applies custom padding to content', () => {
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={() => { }} title="Test Modal" padding="15px">
        <p data-testid="content">Modal Content</p>
      </Modal>
    );

    const contentElement = getByTestId('content');
    expect(contentElement.parentElement).toHaveStyle('padding: 15px');
  });

  test('does not render modal when isOpen is false', () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => {}} title="Test Modal" padding="10px">
        <p>Modal Content</p>
      </Modal>
    );
  
    expect(queryByText('Test Modal')).toBeNull();
    expect(queryByText('Modal Content')).toBeNull();
  });

  test('does not render modal when isOpen is false', () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => { }} title="Test Modal" padding="10px">
        <p>Modal Content</p>
      </Modal>
    );

    expect(queryByText('Test Modal')).toBeNull();
    expect(queryByText('Modal Content')).toBeNull();
  });
});
