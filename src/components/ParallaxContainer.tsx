import { ParallaxLayer } from "./ParallaxLayer";
import styles from "./Parallax.module.css";
import { AnimationSequence } from "./AnimationSequence";

export const ParallaxContainer = () => {
  return (
    <div className={styles.container}>
      <ParallaxLayer
        imageName="parallax-forest-back-trees.png"
        animationDuration={100}
      />
      <ParallaxLayer
        imageName="parallax-forest-middle-trees.png"
        animationDuration={70}
      />
      <ParallaxLayer
        imageName="parallax-forest-front-trees.png"
        animationDuration={40}
      />
      <AnimationSequence />
    </div>
  );
};
