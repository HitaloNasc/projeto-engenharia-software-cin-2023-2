import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './index.js';

describe('Navbar component', () => {
    test('renders logo', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const logo = screen.getByAltText('Logo');
        expect(logo).toBeInTheDocument();
    });

    test('renders "Nova Análise" link', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const novaAnaliseLink = screen.getByTestId('nova-analise-icon');
        expect(novaAnaliseLink).toBeInTheDocument();
    });

    test('renders "Resultados" link', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const resultadosIcon = screen.getByTestId('resultados-icon');
        expect(resultadosIcon).toBeInTheDocument();
    });
});
