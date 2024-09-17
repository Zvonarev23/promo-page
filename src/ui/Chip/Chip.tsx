import classNames from 'classnames';
import styles from './Chip.module.scss';

interface ChipProps {
  label: string;
  className?: string;
}

export const Chip = ({ label, className }: ChipProps) => {
  return (
    <div className={classNames(styles.chip, className)}>
      <span className={styles.label}>{label}</span>
    </div>
  );
};
