import fashionImage from '@assets/images/fashion.png';
import threeDImage from '@assets/images/3d.png';
import charactersImage from '@assets/images/characters.png';
import portraitsImage from '@assets/images/portraits.png';
import backgroundImage from '@assets/images/background-images.png';

import { Slide } from 'utils/types';

export const slidesData: Slide[] = [
  {
    imageSrc: fashionImage,
    title: 'Fashion ракурсы',
    description:
      'Откройте для себя секреты создания уникальных fashion ракурсов с помощью Midjourney. Мы расскажем, как подобрать идеальный стиль, позу и атмосферу.',
  },
  {
    imageSrc: threeDImage,
    title: '3D объекты',
    description:
      'Научитесь создавать впечатляющие 3D объекты с помощью Midjourney. Узнайте, как воплотить свои идеи в трехмерной форме и придать вашим проектам реалистичность.',
  },
  {
    imageSrc: backgroundImage,
    title: 'Фоновые изображения',
    description:
      'Погрузитесь в мир создания фоновых изображений с Midjourney. Узнайте, как подобрать идеальный фон для ваших проектов, чтобы подчеркнуть стиль.',
  },
  {
    imageSrc: portraitsImage,
    title: 'Портреты',
    description:
      'Откройте для себя искусство создания портретов с Midjourney. Узнайте, как передать эмоции, характер и стиль персонажа, создавая уникальные образы.',
  },
  {
    imageSrc: charactersImage,
    title: 'Персонажи',
    description:
      'Создавайте захватывающих персонажей с помощью Midjourney. Узнайте, как воплотить в жизнь уникальные образы, придавая им характер и индивидуальность.',
  },
];
