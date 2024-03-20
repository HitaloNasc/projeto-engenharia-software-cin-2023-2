import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DeleteConfirmationModal from './index.js';

describe('DeleteConfirmationModal component', () => {
  test('renders modal with confirmation message', () => {
    const { getByText } = render(
      <DeleteConfirmationModal open={true} onClose={() => {}} onConfirm={() => {}} />
    );
    const confirmationMessage = getByText('Tem certeza que deseja excluir a análise?');
    expect(confirmationMessage).toBeInTheDocument();
  });

  test('calls onClose function when "Cancelar" button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <DeleteConfirmationModal open={true} onClose={onCloseMock} onConfirm={() => {}} />
    );
    const cancelButton = getByText('Cancelar');
    fireEvent.click(cancelButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('calls onConfirm function when "Excluir" button is clicked', () => {
    const onConfirmMock = jest.fn();
    const { getByText } = render(
      <DeleteConfirmationModal open={true} onClose={() => {}} onConfirm={onConfirmMock} />
    );
    const confirmButton = getByText('Excluir');
    fireEvent.click(confirmButton);
    expect(onConfirmMock).toHaveBeenCalledTimes(1);
  });
});
