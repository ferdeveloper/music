type SocialMedia = {
  icon: string,
  url: string,
  alt: string,
}

const socialMediaData: Array<SocialMedia> = [
  {
    icon: 'youtube_icon',
    url: 'https://www.youtube.com/watch?v=vICY98ENj_M&list=PLaMOPPiDuV-0s1wNrzBedzKVBOTPiyHpy',
    alt: 'Youtube',
  },
  {
    icon: 'spotify_icon',
    url: 'https://open.spotify.com/album/5vvHdYI1C21dnS8Mon45B8?si=tud2-Ru2RQeVSNa47gVQiA',
    alt: 'Spotify',
  },
  {
    icon: 'amazon_icon',
    url: 'https://music.amazon.es/albums/B0C7W79FVP?marketplaceId=A1RKKUPIHCS9HS&musicTerritory=ES&ref=dm_sh_ZeAX9MwYlfbsLniFSRhkwnZJT',
    alt: 'Amazon Music',
  },
];

export default socialMediaData;
