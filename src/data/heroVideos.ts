export interface BeverageVideo {
  id: string;
  title: string;
  hindiTitle: string;
  src: string;
  fallbackSrc?: string;
  description: string;
}

export const HERO_BEVERAGE_VIDEOS: BeverageVideo[] = [
  {
    id: 'masala-chai',
    title: 'Masala Chai',
    hindiTitle: 'मसाला चाय',
    src: '/videos/masala-chai.mp4',
    fallbackSrc: '/assets/Videos/Masala Chai.mp4',
    description: 'Authentic Kathiyawadi spiced kadak chai brewed with pure desi spices'
  },
  {
    id: 'lemon-tea',
    title: 'Lemon Tea',
    hindiTitle: 'लेमन टी',
    src: '/videos/lemon-tea.mp4',
    fallbackSrc: '/assets/Videos/Lemon Tea.mp4',
    description: 'Refreshing zesty tea infused with fresh citrus and warmth'
  },
  {
    id: 'coffee',
    title: 'Coffee',
    hindiTitle: 'कॉफी',
    src: '/videos/coffee.mp4',
    fallbackSrc: '/assets/Videos/Coffee.mp4',
    description: 'Rich roasted aromatic coffee with creamy froth and deep flavor'
  },
  {
    id: 'kesar-masala-dudh',
    title: 'Kesar Masala Dudh',
    hindiTitle: 'केसर मसाला दूध',
    src: '/videos/kesar-masala-dudh.mp4',
    fallbackSrc: '/assets/Videos/Kesar_masala_dudh.mp4',
    description: 'Royal saffron & dry fruit infused hot spiced milk heritage recipe'
  }
];

export const VIDEO_TRANSITION_DURATION_MS = 700;
