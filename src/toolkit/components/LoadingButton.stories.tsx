import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { Story, Meta } from '@storybook/react';
import LoadingButton, { IconDirection, LoadingButtonProps } from '../components/LoadingButton';


export default {
  title: 'Toolkit/LoadingButton',
  component: LoadingButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LoadingButtonProps> = (args) => <LoadingButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Save',
  loading: false,
};

export const Block = Template.bind({});
Block.args = {
  label: 'Save',
  loading: false,
  block: true,
};

export const Colored = Template.bind({});
Colored.args = {
  label: 'Save',
  loading: false,
  color: "danger",
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  icon: 'fa fa-save'
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  label: 'Save'
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'Save',
  loading: false,
  icon: 'fa fa-save'
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  label: 'Save',
  icon: 'fa fa-save',
  iconDirection: IconDirection.RIGHT,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  label: 'Save',
  icon: 'fa fa-save',
  iconDirection: IconDirection.LEFT,
};

export const LoadingNoIcon = Template.bind({});
LoadingNoIcon.args = {
  label: 'Save',
  loading: true
};

export const LoadingWithIcon = Template.bind({});
LoadingWithIcon.args = {
  label: 'Save',
  loading: true,
  icon: 'fa fa-save'
};

export const Tooltipped = Template.bind({});
Tooltipped.args = {
  label: 'Save',
  icon: 'fa fa-save',
  hideLabel: true,
};
