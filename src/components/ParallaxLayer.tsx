import styles from "./Parallax.module.css";
export const ParallaxLayer = ({
  imageName,
  animationDuration = 0,
}: {
  imageName: string;
  animationDuration?: number;
}) => {
  return (
    <div
      className={styles.layer}
      style={{
        backgroundImage: `url('/src/assets/parallax_forest_pack/layers/${imageName}')`,
        animationDuration: `${animationDuration}s`,
      }}
    ></div>
  );
};
