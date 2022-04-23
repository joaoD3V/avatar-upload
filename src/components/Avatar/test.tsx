import 'jest-canvas-mock';

import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { Avatar } from '.';
import React from 'react';

describe('<Avatar />', () => {
  it('should render the avatar correctly', () => {
    const props = {
      src: 'https://99prod.s3.amazonaws.com/uploads/image/file/2429377/3eef648f6ce677d5e317509045df2be0.jpg',
      sliderValue: 0,
    };

    const { container } = renderWithTheme(<Avatar {...props} />);

    expect(screen.getByLabelText(/Avatar canva/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Avatar canva/i)).toHaveAttribute(
      'width',
      '113'
    );

    expect(screen.getByLabelText(/Avatar canva/i)).toHaveAttribute(
      'height',
      '113'
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
