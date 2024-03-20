import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from './index';

describe('Dashboard Component', () => {
    test('renders correctly', () => {
        const { getByText } = render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );
        expect(getByText('Converta imagens em PDF em texto legível mapeado')).toBeInTheDocument();
    });

    test('selects file and shows file details', async () => {
        const { getByText, getByLabelText } = render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );
        const fileInput = getByLabelText('Selecionar arquivo PDF');
        const file = new File(['(⌐□_□)'], 'example.pdf', { type: 'application/pdf' });

        fireEvent.change(fileInput, { target: { files: [file] } });

        await waitFor(() => {
            expect(getByText('example.pdf')).toBeInTheDocument();
            expect(getByText('0.01 KB')).toBeInTheDocument();
        });
    });

    test('file selection triggers analysis button appearance', async () => {
        const { getByRole } = render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );

        const selectFileButton = getByRole('button', { name: /selecionar arquivo pdf/i });

        fireEvent.click(selectFileButton);

    });

});
