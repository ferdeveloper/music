import AlbumHero from './AlbumHero.vue';

export default {
  title: 'Design System/molecules/AlbumHero',
  component: AlbumHero,
};

const PrimaryTemplate = () => ({
  components: { AlbumHero },
  template: `
    <AlbumHero></AlbumHero>
  `,
});

export const Primary = PrimaryTemplate.bind({});