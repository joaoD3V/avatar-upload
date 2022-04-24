import 'jest-canvas-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { AvatarEditing } from '.';

const props = {
  src: 'https://99prod.s3.amazonaws.com/uploads/image/file/2429377/3eef648f6ce677d5e317509045df2be0.jpg',
};

describe('<AvatarEditing />', () => {
  it('should render without border and with close button by default', () => {
    renderWithTheme(<AvatarEditing {...props} />);

    expect(screen.queryByLabelText(/close button/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Wrapper/i)).toHaveStyle({
      border: '0',
    });
  });

  it('should render avatar, crop slider and save button corretly', () => {
    const { container } = renderWithTheme(<AvatarEditing {...props} />);

    expect(screen.getByLabelText(/Avatar canva/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Crop slider/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
