import type { Meta, StoryObj } from '@storybook/vue3';
import Head1 from './Head1.vue';

const meta: Meta<typeof Head1> = {
  component: Head1,
};

export default meta;

type Story = StoryObj<typeof Head1>;

export const Primary: Story = {
  render: (args) => ({
    title: 'Design System/atoms/text/Head1',
    components: { Head1 },
    setup() {
      return { args };
    },
    template: '<Head1>This is a H1</Head1>',
  }),
};
