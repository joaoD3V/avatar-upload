import { Meta, Story } from '@storybook/react';

import { CropSlider, CropSliderProps } from './index';

export default {
  title: 'CropSlider',
  component: CropSlider,
  args: {
    sliderValue: 20,
    handleUpdateSliderValue: () => console.log('Click'),
  },
} as Meta;

export const Basic: Story<CropSliderProps> = (args) => (
  <div
    style={{
      width: '276px',
    }}
  >
    <CropSlider {...args} />
  </div>
);
