import { useRef } from 'react';
import classNames from 'classnames';

import { ReactComponent as ArrowLeft } from '@assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '@assets/icons/arrow-right.svg';
import { Chip } from '@ui/Chip';
import { Slider } from '@components/Slider';
import { Layout } from '@components/Layout';

import { slidesData } from '@data/slidesData';
import { SliderHandle } from 'utils/types';

import styles from './Library.module.scss';

const scrollAmount = 300;

export const Library = () => {
  const sliderRef = useRef<SliderHandle>(null);

  const handleClickLeftArrow = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft();
    }
  };

  const handleClickRightArrow = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollRight();
    }
  };

  return (
    <Layout>
      <div className={styles.library}>
        <div className={styles.sectionTop}>
          <div>
            <Chip
              className={styles.chip}
              label="Библиотека"
            />
            <h2 className={styles.title}>Рандомные стили</h2>
          </div>

          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={handleClickLeftArrow}
            >
              <ArrowLeft className={classNames(styles.icon, styles.leftIcon)} />
            </button>
            <button
              className={styles.button}
              onClick={handleClickRightArrow}
            >
              <ArrowRight
                className={classNames(styles.icon, styles.rightIcon)}
              />
            </button>
          </div>
        </div>

        <Slider
          ref={sliderRef}
          slides={slidesData}
          scrollAmount={scrollAmount}
        />
      </div>
    </Layout>
  );
};
