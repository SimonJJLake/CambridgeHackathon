import { ParallaxLayer } from "./ParallaxLayer";
import styles from "./Parallax.module.css";
export const ParallaxContainer = () => {
  return (
    <div className={styles.container}>
      <ParallaxLayer
        imageName="parallax-forest-back-trees.png"
        animationDuration={20}
      />
      <ParallaxLayer
        imageName="parallax-forest-middle-trees.png"
        animationDuration={30}
      />
      <ParallaxLayer
        imageName="parallax-forest-front-trees.png"
        animationDuration={60}
      />
    </div>
  );
};
