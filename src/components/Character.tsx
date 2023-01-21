import styles from "./Character.module.css";
export interface AnimationData {
  layers: string[];
  sheetOffset: number;
  reverse: boolean;
  steps: number;
  duration: number;
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
              animationTimingFunction: `steps(${animationData.steps})`,
              animationDuration: `${animationData.duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};
