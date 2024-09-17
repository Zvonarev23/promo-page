import { ReactNode } from 'react';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <section className={styles.layout}>{children}</section>;
};
