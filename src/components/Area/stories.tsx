import { Meta, Story } from '@storybook/react';

import { Area, AreaProps } from './index';

export default {
  title: 'Area',
  component: Area,
} as Meta;

export const Basic: Story<AreaProps> = (args) => <Area {...args} />;

export const WithClose: Story<AreaProps> = (args) => <Area {...args} />;

WithClose.args = {
  hasClose: true,
};
