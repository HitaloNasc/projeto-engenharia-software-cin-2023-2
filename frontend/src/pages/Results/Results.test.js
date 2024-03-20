import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Results from './index.js';

const resultsDataMock = [
    { id: 1, fileName: 'File 1', date: '2024-03-19' },
    { id: 2, fileName: 'File 2', date: '2024-03-18' },
];
  
jest.mock('./results.json', () => resultsDataMock);

describe('Results page', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Results />
            </BrowserRouter>
        );
    });

    test('renders page title', () => {
        const titleElement = screen.getByText('Resultados', { selector: 'h5' });
        expect(titleElement).toBeInTheDocument();
    });

    test('renders update button', () => {
        const updateButton = screen.getByRole('button', { name: 'Atualizar' });
        expect(updateButton).toBeInTheDocument();
    });

    test('renders list of results', () => {
        const resultList = screen.getByRole('list');
        expect(resultList).toBeInTheDocument();
    });

    test('closes delete confirmation modal when cancel button is clicked', () => {
        const deleteButton = screen.getAllByTestId('delete-button-1')[0];
        fireEvent.click(deleteButton);
        const cancelButton = screen.getByRole('button', { name: 'Cancelar' });
        fireEvent.click(cancelButton);
        const modal = screen.queryByText('Tem certeza que deseja excluir este resultado?');
        expect(modal).not.toBeInTheDocument();
    });

});
