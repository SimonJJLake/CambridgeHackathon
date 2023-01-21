import { Character, CharacterAnimations } from "./Character";
import styles from "./Character.module.css";
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
  shield: {
    layers: [
      "walkcycle/BODY_male.png",
      "walkcycle/FEET_plate_armor_shoes.png",
      "walkcycle/LEGS_plate_armor_pants.png",
      "walkcycle/TORSO_plate_armor_torso.png",
      "walkcycle/TORSO_plate_armor_arms_shoulders.png",
      "walkcycle/HANDS_plate_armor_gloves.png",
      "walkcycle/HEAD_hair_blonde.png",
      "walkcycle/WEAPON_shield_cutout_body.png",
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
    duration: 1.2,
    iterCount: "1",
  },
  spear: {
    layers: [
      "thrust/BODY_animation.png",
      "thrust/FEET_plate_armor_shoes.png",
      "thrust/LEGS_plate_armor_pants.png",
      "thrust/TORSO_plate_armor_torso.png",
      "thrust/TORSO_plate_armor_arms_shoulders.png",
      "thrust/HANDS_plate_armor_gloves.png",
      "thrust/WEAPON_spear.png",
      "thrust/HEAD_hair_blonde.png",
    ],
    sheetOffset: 3,
    reverse: false,
    gridWidth: 8,
    gridHeight: 4,
    duration: 1.6,
    iterCount: "1",
  },
  bow: {
    layers: [
      "bow/BODY_animation.png",
      "bow/FEET_plate_armor_shoes.png",
      "bow/LEGS_plate_armor_pants.png",
      "bow/TORSO_plate_armor_torso.png",
      "bow/HEAD_hair_blonde.png",
      "bow/TORSO_plate_armor_arms_shoulders.png",
      "bow/HANDS_plate_armor_gloves.png",
      "bow/WEAPON_bow.png",
      "bow/WEAPON_arrow.png",
    ],
    sheetOffset: 3,
    reverse: false,
    gridWidth: 13,
    gridHeight: 4,
    duration: 2.6,
    iterCount: "1",
  },
  spell: {
    layers: [
      "spellcast/BODY_male.png",
      "spellcast/FEET_plate_armor_shoes.png",
      "spellcast/LEGS_plate_armor_pants.png",
      "spellcast/TORSO_plate_armor_torso.png",
      "spellcast/HEAD_hair_blonde.png",
      "spellcast/TORSO_plate_armor_arms_shoulders.png",
      "spellcast/HANDS_plate_armor_gloves.png",
    ],
    sheetOffset: 3,
    reverse: false,
    gridWidth: 7,
    gridHeight: 4,
    duration: 1.4,
    iterCount: "1",
  },
  hurt: {
    layers: [
      "hurt/BODY_male.png",
      "hurt/FEET_plate_armor_shoes.png",
      "hurt/LEGS_plate_armor_pants.png",
      "hurt/TORSO_plate_armor_torso.png",
      "hurt/HEAD_hair_blonde.png",
      "hurt/TORSO_plate_armor_arms_shoulders.png",
      "hurt/HANDS_plate_armor_gloves.png",
    ],
    sheetOffset: 0,
    reverse: false,
    gridWidth: 6,
    gridHeight: 1,
    duration: 1.2,
    iterCount: "1",
  },
};

const mage: CharacterAnimations = {
  walk: {
    layers: [
      "walkcycle/BODY_male.png",
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
  shield: {
    layers: [
      "walkcycle/BODY_male.png",
      "walkcycle/FEET_shoes_brown.png",
      "walkcycle/LEGS_robe_skirt.png",
      "walkcycle/TORSO_robe_shirt_brown.png",
      "walkcycle/HEAD_robe_hood.png",
      "walkcycle/WEAPON_shield_cutout_body.png",
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
      "slash/BODY_human.png",
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
    duration: 1.2,
    iterCount: "1",
  },
  spear: {
    layers: [
      "thrust/BODY_animation.png",
      "thrust/FEET_shoes_brown.png",
      "thrust/LEGS_robe_skirt.png",
      "thrust/TORSO_robe_shirt_brown.png",
      "thrust/HEAD_robe_hood.png",
      "thrust/WEAPON_spear.png",
    ],
    sheetOffset: 1,
    reverse: false,
    gridWidth: 8,
    gridHeight: 4,
    duration: 1.6,
    iterCount: "1",
  },
  bow: {
    layers: [
      "bow/BODY_animation.png",
      "bow/FEET_shoes_brown.png",
      "bow/LEGS_robe_skirt.png",
      "bow/TORSO_robe_shirt_brown.png",
      "bow/HEAD_robe_hood.png",
      "bow/WEAPON_bow.png",
      "bow/WEAPON_arrow.png",
    ],
    sheetOffset: 1,
    reverse: false,
    gridWidth: 13,
    gridHeight: 4,
    duration: 2.6,
    iterCount: "1",
  },
  spell: {
    layers: [
      "spellcast/BODY_male.png",
      "spellcast/FEET_shoes_brown.png",
      "spellcast/LEGS_robe_skirt.png",
      "spellcast/TORSO_robe_shirt_brown.png",
      "spellcast/HEAD_robe_hood.png",
    ],
    sheetOffset: 1,
    reverse: false,
    gridWidth: 7,
    gridHeight: 4,
    duration: 1.4,
    iterCount: "1",
  },
  hurt: {
    layers: [
      "hurt/BODY_male.png",
      "hurt/FEET_shoes_brown.png",
      "hurt/LEGS_robe_skirt.png",
      "hurt/TORSO_robe_shirt_brown.png",
      "hurt/HEAD_robe_hood.png",
    ],
    sheetOffset: 0,
    reverse: false,
    gridWidth: 6,
    gridHeight: 1,
    duration: 1.2,
    iterCount: "1",
  },
};
export const AnimationScene = ({
  knightAnim = "walk",
  mageAnim = "walk",
  knightDelay = 0,
  mageDelay = 0,
}: {
  knightAnim?: keyof CharacterAnimations;
  mageAnim?: keyof CharacterAnimations;
  knightDelay?: number;
  mageDelay?: number;
}) => {
  return (
    <div className={styles.scene}>
      <Character
        animationData={knight[knightAnim]}
        style={{
          bottom: "10vh",
          left: "20%",
        }}
        animationDelay={knightDelay}
      />
      <Character
        animationData={mage[mageAnim]}
        style={{
          bottom: "10vh",
          right: "20%",
        }}
        animationDelay={mageDelay}
      />
    </div>
  );
};
