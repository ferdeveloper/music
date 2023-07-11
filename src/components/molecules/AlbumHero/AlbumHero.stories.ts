import type { Meta, StoryObj } from '@storybook/vue3';
import AlbumHero from './AlbumHero.vue';

const meta: Meta<typeof AlbumHero> = {
  component: AlbumHero,
};

export default meta;
type Story = StoryObj<typeof AlbumHero>;

export const Primary: Story = {
  render: (args) => ({
    title: 'Design System/molecules/AlbumHero',
    components: { AlbumHero },
    setup() {
      return { args };
    },
    template: '<AlbumHero v-bind="args" />',
  }),
  args: {
    img: 'https://picsum.photos/500',
    title: 'greatest hits',
  },
};

Primary.parameters = {
  layout: 'fullscreen',
};
