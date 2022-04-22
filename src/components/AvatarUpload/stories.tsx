import { Meta, Story } from '@storybook/react';

import { AvatarUpload } from './index';

export default {
  title: 'AvatarUpload',
  component: AvatarUpload,
} as Meta;

export const Basic: Story = (args) => <AvatarUpload {...args} />;

export const WithAvatar: Story = (args) => <AvatarUpload {...args} />;

WithAvatar.args = {
  options: {
    src: 'https://99prod.s3.amazonaws.com/uploads/image/file/2429377/3eef648f6ce677d5e317509045df2be0.jpg',
    sliderValue: 0,
  },
};
