import { Meta, Story } from '@storybook/react';

import { AvatarError } from './index';

export default {
  title: 'AvatarError',
  component: AvatarError,
} as Meta;

export const Basic: Story = (args) => <AvatarError {...args} />;
