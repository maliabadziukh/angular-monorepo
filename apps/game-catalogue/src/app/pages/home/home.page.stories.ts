import type { Meta, StoryObj } from '@storybook/angular';
import { HomePage } from './home.page';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomePage> = {
  component: HomePage,
  title: 'HomePage',
};
export default meta;
type Story = StoryObj<HomePage>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home.page works!/gi)).toBeTruthy();
  },
};
