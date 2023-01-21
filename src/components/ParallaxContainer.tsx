import { ParallaxLayer } from "./ParallaxLayer";
import styles from "./Parallax.module.css";
import { Character, AnimationData } from "./Character";

const knightWalk: AnimationData = {
  layers: [
    "walkcycle/BODY_male.png",
    "walkcycle/FEET_plate_armor_shoes.png",
    "walkcycle/LEGS_plate_armor_pants.png",
    "walkcycle/TORSO_plate_armor_torso.png",
    "walkcycle/TORSO_plate_armor_arms_shoulders.png",
    "walkcycle/HANDS_plate_armor_gloves.png",
    "walkcycle/HEAD_hair_blonde.png",
  ],
  sheetOffset: 3,
  reverse: false,
  steps: 9,
  duration: 1.8,
};
const mageWalk: AnimationData = {
  layers: [
    "walkcycle/BODY_skeleton.png",
    "walkcycle/FEET_shoes_brown.png",
    "walkcycle/LEGS_robe_skirt.png",
    "walkcycle/TORSO_robe_shirt_brown.png",
    "walkcycle/HEAD_robe_hood.png",
  ],
  sheetOffset: 1,
  reverse: true,
  steps: 9,
  duration: 1.8,
};
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
      <Character
        animationData={knightWalk}
        style={{
          bottom: "10vh",
          left: "20%",
        }}
      />
      <Character
        animationData={mageWalk}
        style={{
          bottom: "10vh",
          right: "20%",
        }}
      />
    </div>
  );
};
