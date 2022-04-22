import { Meta, Story } from '@storybook/react';

import { Avatar, AvatarProps } from './index';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    src: 'https://99prod.s3.amazonaws.com/uploads/image/file/2429377/3eef648f6ce677d5e317509045df2be0.jpg',
    sliderValue: 0,
  },
} as Meta;

export const Basic: Story<AvatarProps> = (args) => <Avatar {...args} />;
