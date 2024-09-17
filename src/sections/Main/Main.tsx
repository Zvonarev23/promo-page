import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { Layout } from '@components/Layout';
import { Header } from '@components/Header';
import { Button } from '@ui/Button';
import { Chip } from '@ui/Chip';

import styles from './Main.module.scss';

export const Main = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <Layout>
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>
          <div
            className={classNames(
              styles.titleSubtitle,
              isAnimated ? styles.animate : ''
            )}
          >
            <h1 className={styles.title}>Как использовать нейросети</h1>
            <p className={styles.subtitle}>в графическом дизайне</p>
          </div>

          <div
            className={classNames(
              styles.freeGuide,
              isAnimated ? styles.animate : ''
            )}
          >
            <Chip
              className={styles.chip}
              label="Бесплатный гайд"
            />
            <p className={styles.description}>
              Получите бесплатный гайд по искусственному интеллекту, который
              поможет улучшить работу графического дизайнера
            </p>
          </div>

          <Button className={styles.button}>Получить гайд</Button>

          <div className={styles.decorationLeft}></div>
          <div className={styles.decorationRight}></div>
          <div className={styles.decorationBottom}></div>
        </div>
      </div>
    </Layout>
  );
};
