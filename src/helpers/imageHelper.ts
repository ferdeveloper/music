export const getAbsoluteImageUrl = (imagesURL: string, imagePath: string): string => `${imagesURL}/${imagePath}`;

export const linearGradientImage = (imageUrl: string, endOpacity = 1) => ({
  backgroundImage: `linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, ${endOpacity}) 100%
  ), url(${imageUrl})`,
});
