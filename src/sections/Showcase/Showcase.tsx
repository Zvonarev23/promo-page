import styles from './Showcase.module.scss';

export const Showcase = () => {
  return (
    <section className={styles.showcase}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          Использование ИИ позволяет значительно сэкономить ресурсы
        </h2>
        <span className={styles.number}>01</span>
        <p className={styles.description}>
          Нейросетям можно поручить рутинные задачи — сортировку или создание
          изображений — или реализацию целого проекта. Для этого дизайнеру нужно
          разбираться в инструментах и их возможностях.
        </p>
        <div className={styles.decorationRight}></div>
      </div>
    </section>
  );
};
