import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { CropSlider } from '.';

describe('<AvatarEditing />', () => {
  it('should render title and slider correctly', () => {
    const handleUpdateSliderValue = jest.fn();
    const { container } = renderWithTheme(
      <CropSlider
        handleUpdateSliderValue={handleUpdateSliderValue}
        sliderValue={0}
      />
    );

    expect(screen.getByText(/Crop/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Crop slider/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
