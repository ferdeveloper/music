import type { Meta, StoryObj } from '@storybook/vue3';
import AlbumHeroMobile from './AlbumHeroMobile.vue';

const meta: Meta<typeof AlbumHeroMobile> = {
  component: AlbumHeroMobile,
};

export default meta;

type Story = StoryObj<typeof AlbumHeroMobile>;

export const Primary: Story = {
  render: (args) => ({
    title: 'Design System/molecules/AlbumHeroMobile',
    components: { AlbumHeroMobile },
    setup() {
      return { args };
    },
    template: '<AlbumHeroMobile v-bind="args" />',
  }),
  args: {
    img: 'https://picsum.photos/500',
    title: 'greatest hits',
  },
};

Primary.parameters = {
  layout: 'fullscreen',
};
