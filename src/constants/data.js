import images from './images';

const wines = [
  {
    title: 'Jus Citron',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Water',
    price: '$0',
    tags: 'Free',
  },
  {
    title: 'fruity',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'coctal',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Jus orange',
    price: '$26',
    tags: 'Or | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Jus banan',
    price: '$20',
    tags: 'Aper | ice | soda | 30 ml',
  },
  {
    title: "soda",
    price: '$16',
    tags: 'citron | sooda | ice',
  },
  {
    title: 'Citron',
    price: '$10',
    tags: 'ice | wahter | Sugar',
  },
  {
    title: 'Old Jus',
    price: '$31',
    tags: 'jsu|  sugar | icegreen',
  },
  {
    title: 'Zaaim',
    price: '$26',
    tags: 'soda| Suger | ice | Orange ',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
