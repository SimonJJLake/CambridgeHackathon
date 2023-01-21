import styles from "./Character.module.css";

export interface CharacterAnimations {
  walk: AnimationData;
  dagger: AnimationData;
  spear: AnimationData;
  shield: AnimationData;
  bow: AnimationData;
  spell: AnimationData;
  hurt: AnimationData;
}
export interface AnimationData {
  layers: string[];
  sheetOffset: number;
  reverse: boolean;
  duration: number;
  gridWidth: number;
  gridHeight: number;
  iterCount: string;
}
export const Character = ({
  animationData,
  style,
}: {
  animationData: AnimationData;
  style: any;
}) => {
  return (
    <div className={styles.container} style={style}>
      {animationData.layers.map((layer) => {
        return (
          <div
            key={layer}
            className={styles.layer}
            style={{
              backgroundImage: `url('/src/assets/characters/png/${layer}')`,
              backgroundPositionY: `-${animationData.sheetOffset * 20}vh`,
              animationDirection: animationData.reverse ? "reverse" : "normal",
              animationTimingFunction: `steps(${animationData.gridWidth})`,
              animationDuration: `${animationData.duration}s`,
              width: `${20 * animationData.gridWidth}vh`,
              height: `${20 * animationData.gridHeight}vh`,
              backgroundSize: `${20 * animationData.gridWidth}vh ${
                20 * animationData.gridHeight
              }vh`,
              animationIterationCount: animationData.iterCount,
            }}
          />
        );
      })}
    </div>
  );
};
