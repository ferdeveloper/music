import type { Meta, StoryObj } from '@storybook/vue3';
import AlbumHeroDesktop from './AlbumHeroDesktop.vue';

const meta: Meta<typeof AlbumHeroDesktop> = {
  component: AlbumHeroDesktop,
};

export default meta;

type Story = StoryObj<typeof AlbumHeroDesktop>;

export const Primary: Story = {
  render: (args) => ({
    title: 'Design System/molecules/AlbumHeroDesktop',
    components: { AlbumHeroDesktop },
    setup() {
      return { args };
    },
    template: '<AlbumHeroDesktop v-bind="args" />',
  }),
  args: {
    img: 'https://picsum.photos/500',
    title: 'greatest hits',
  },
};

Primary.parameters = {
  layout: 'fullscreen',
};
