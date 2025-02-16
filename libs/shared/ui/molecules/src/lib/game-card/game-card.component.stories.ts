import type { Meta, StoryObj } from '@storybook/angular';
import { GameCardComponent } from './game-card.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<GameCardComponent> = {
  component: GameCardComponent,
  title: 'GameCardComponent',
};
export default meta;
type Story = StoryObj<GameCardComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/game-card works!/gi)).toBeTruthy();
  },
};
