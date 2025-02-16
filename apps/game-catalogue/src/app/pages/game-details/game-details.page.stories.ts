import type { Meta, StoryObj } from '@storybook/angular';
import { GameDetailsPageComponent } from './game-details.page';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<GameDetailsPageComponent> = {
  component: GameDetailsPageComponent,
  title: 'GameDetailsPageComponent',
};
export default meta;
type Story = StoryObj<GameDetailsPageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/game-details.page works!/gi)).toBeTruthy();
  },
};
