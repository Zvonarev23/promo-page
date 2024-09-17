import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Card } from '@components/Card';

import { Slide, SliderHandle } from 'utils/types';

import styles from './Slider.module.scss';

interface SliderProps {
  slides: Slide[];
  scrollAmount: number;
}

export const Slider = forwardRef<SliderHandle, SliderProps>(function Slider(
  { slides, scrollAmount },
  ref
) {
  const localRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    scrollLeft: () => {
      if (localRef.current) {
        localRef.current.scrollLeft -= scrollAmount;
      }
    },
    scrollRight: () => {
      if (localRef.current) {
        localRef.current.scrollLeft += scrollAmount;
      }
    },
  }));

  return (
    <div
      ref={localRef}
      className={styles.slider}
    >
      {slides.map((slide) => (
        <Card
          key={slide.title}
          imageSrc={slide.imageSrc}
          title={slide.title}
          description={slide.description}
        />
      ))}
    </div>
  );
});
