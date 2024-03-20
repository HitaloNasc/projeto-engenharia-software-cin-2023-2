import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropzone from './index.js';

describe('Dropzone component', () => {
  test('renders text "ou arraste e solte o PDF aqui"', () => {
    const { getByText } = render(<Dropzone />);
    const textElement = getByText(/ou arraste e solte o PDF aqui/i);
    expect(textElement).toBeInTheDocument();
  });

  test('calls onDrop function when file is dropped', () => {
    const onDropMock = jest.fn();
    const { container } = render(<Dropzone onDrop={onDropMock} />);
    const dropzone = container.firstChild;
    fireEvent.drop(dropzone);
    expect(onDropMock).toHaveBeenCalledTimes(1);
  });

  test('calls onDragOver function when drag over the dropzone', () => {
    const onDragOverMock = jest.fn();
    const { container } = render(<Dropzone onDragOver={onDragOverMock} />);
    const dropzone = container.firstChild;
    fireEvent.dragOver(dropzone);
    expect(onDragOverMock).toHaveBeenCalledTimes(1);
  });

  test('calls onDragLeave function when drag leaves the dropzone', () => {
    const onDragLeaveMock = jest.fn();
    const { container } = render(<Dropzone onDragLeave={onDragLeaveMock} />);
    const dropzone = container.firstChild;
    fireEvent.dragLeave(dropzone);
    expect(onDragLeaveMock).toHaveBeenCalledTimes(1);
  });
});
