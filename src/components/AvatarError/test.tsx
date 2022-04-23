import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { AvatarError } from '.';
import React from 'react';

describe('<AvatarError />', () => {
  it('should render without border and with close button by default', () => {
    const { container } = renderWithTheme(<AvatarError />);

    expect(screen.queryByLabelText(/close button/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/wrapper/i)).toHaveStyle({
      border: '0',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the attention icon', () => {
    renderWithTheme(<AvatarError />);

    expect(
      screen.getByRole('img', { name: 'Exclamation icon' })
    ).toBeInTheDocument();
  });

  it('should render the information text', () => {
    renderWithTheme(<AvatarError />);

    expect(screen.getByText(/Sorry, the upload failed./i)).toBeInTheDocument();
  });

  it('should render the try again button', () => {
    renderWithTheme(<AvatarError />);

    expect(
      screen.getByRole('button', { name: 'Try again' })
    ).toBeInTheDocument();
  });
});
