import 'jest-canvas-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { AvatarUpload } from '.';

describe('<AvatarUpload />', () => {
  it('should render without avatar by default', () => {
    const { container } = renderWithTheme(<AvatarUpload />);

    expect(screen.queryByLabelText(/close button/i)).not.toBeInTheDocument();
    expect(screen.getByLabelText(/wrapper/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/Avatar canva/i)).not.toBeInTheDocument();
    expect(
      screen.getByAltText(
        /Illustration of mountains and sun, symbolizing a picture icon/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Organization Logo/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Drop the image here or click to browse./i)
    ).toBeInTheDocument();
    expect(screen.getByTestId(/drop-input/i)).toBeInTheDocument();
    expect(screen.getByTestId(/drop-wrapper/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with avatar', () => {
    const props = {
      src: 'https://99prod.s3.amazonaws.com/uploads/image/file/2429377/3eef648f6ce677d5e317509045df2be0.jpg',
      sliderValue: 0,
    };

    renderWithTheme(<AvatarUpload options={props} />);

    expect(screen.queryByLabelText(/Avatar canva/i)).toBeInTheDocument();
  });
});
