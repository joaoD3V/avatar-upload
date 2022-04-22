import { Meta, Story } from '@storybook/react';

import { AvatarEditing, AvatarEditingProps } from './index';

export default {
  title: 'AvatarEditing',
  component: AvatarEditing,
  args: {
    src: 'https://99prod.s3.amazonaws.com/uploads/image/file/2429377/3eef648f6ce677d5e317509045df2be0.jpg',
  },
} as Meta;

export const Basic: Story<AvatarEditingProps> = (args) => (
  <AvatarEditing {...args} />
);
