import { Meta, Story } from '@storybook/react';

import Avatar, { AvatarProps } from './index';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    src: 'https://99prod.s3.amazonaws.com/uploads/image/file/2429377/3eef648f6ce677d5e317509045df2be0.jpg',
  },
} as Meta;

export const Basic: Story<AvatarProps> = (args) => (
  <div
    style={{
      width: '553px',
      height: '177px',
      background: '#F2F5F8',
      borderRadius: '8px',
      margin: 'auto',
      padding: '32px',
    }}
  >
    <Avatar {...args} />
  </div>
);
