import { ParallaxLayer } from "./ParallaxLayer";
import styles from "./Parallax.module.css";
import { Character, AnimationData, CharacterAnimations } from "./Character";

const knight: CharacterAnimations = {
  walk: {
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
    gridWidth: 9,
    gridHeight: 4,
    duration: 1.8,
    iterCount: "infinte",
  },
  dagger: {
    layers: [
      "slash/BODY_human.png",
      "slash/FEET_plate_armor_shoes.png",
      "slash/LEGS_plate_armor_pants.png",
      "slash/TORSO_plate_armor_torso.png",
      "slash/TORSO_plate_armor_arms_shoulders.png",
      "slash/HANDS_plate_armor_gloves.png",
      "slash/WEAPON_dagger.png",
      "slash/HEAD_hair_blonde.png",
    ],
    sheetOffset: 3,
    reverse: false,
    gridWidth: 6,
    gridHeight: 4,
    duration: 0.6,
    iterCount: "infinite",
  },
};

const mage: CharacterAnimations = {
  walk: {
    layers: [
      "walkcycle/BODY_skeleton.png",
      "walkcycle/FEET_shoes_brown.png",
      "walkcycle/LEGS_robe_skirt.png",
      "walkcycle/TORSO_robe_shirt_brown.png",
      "walkcycle/HEAD_robe_hood.png",
    ],
    sheetOffset: 1,
    reverse: true,
    gridWidth: 9,
    gridHeight: 4,
    duration: 1.8,
    iterCount: "infinite",
  },
  dagger: {
    layers: [
      "slash/BODY_skeleton.png",
      "slash/FEET_shoes_brown.png",
      "slash/LEGS_robe_skirt.png",
      "slash/TORSO_robe_shirt_brown.png",
      "slash/HEAD_robe_hood.png",
      "slash/WEAPON_dagger.png",
    ],
    sheetOffset: 1,
    reverse: false,
    gridWidth: 6,
    gridHeight: 4,
    duration: 0.6,
    iterCount: "infinite",
  },
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
        animationData={knight.dagger}
        style={{
          bottom: "10vh",
          left: "20%",
        }}
      />
      <Character
        animationData={mage.dagger}
        style={{
          bottom: "10vh",
          right: "20%",
        }}
      />
    </div>
  );
};
