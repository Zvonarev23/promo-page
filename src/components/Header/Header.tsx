import classNames from 'classnames';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { Layout } from '../Layout';
import { Button } from '../../ui/Button/Button';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Layout>
        <div className={styles.container}>
          <a
            className={styles.link}
            href="/"
          >
            <Logo className={styles.logo} />
          </a>

          <Button className={styles.menuButton}>Меню</Button>

          <div className={styles.burgerButton}>
            <span
              className={classNames(styles.burgerLine, styles.longer)}
            ></span>
            <span
              className={classNames(styles.burgerLine, styles.shorter)}
            ></span>
            <span
              className={classNames(styles.burgerLine, styles.longer)}
            ></span>
          </div>
        </div>
      </Layout>
    </header>
  );
};
