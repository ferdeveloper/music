import type { Meta, StoryObj } from '@storybook/vue3';
import SocialMediaBlock from './SocialMediaBlock.vue';

const meta: Meta<typeof SocialMediaBlock> = {
  component: SocialMediaBlock,
};

export default meta;

type Story = StoryObj<typeof SocialMediaBlock>;

export const Primary: Story = {
  render: () => ({
    title: 'Design System/molecules/SocialMediaBlock',
    components: { SocialMediaBlock },
    template: '<SocialMediaBlock />',
  }),
};
