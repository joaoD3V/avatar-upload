import { Meta, Story } from '@storybook/react';

import CropSlider, { CropSliderProps } from './index';

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
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CropSlider {...args} />
  </div>
);
