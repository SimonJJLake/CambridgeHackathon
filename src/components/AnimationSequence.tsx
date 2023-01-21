import { useEffect, useState } from "react";
import { AnimationScene } from "./AnimationScene";
import { CharacterAnimations } from "./Character";

const sequence = [
  {
    scene: <AnimationScene knightAnim={"walk"} mageAnim={"walk"} />,
    duration: 3,
    index: 0,
  },
  {
    scene: <AnimationScene knightAnim={"bow"} mageAnim={"bow"} />,
    duration: 3,
    index: 1,
  },
  {
    scene: <AnimationScene knightAnim={"walk"} mageAnim={"walk"} />,
    duration: 3,
    index: 2,
  },
];

export const AnimationSequence = ({
  knightAnim = "walk",
  mageAnim = "walk",
}: {
  knightAnim?: keyof CharacterAnimations;
  mageAnim?: keyof CharacterAnimations;
}) => {
  const [stage, setStage] = useState(sequence[0]);
  useEffect(() => {
    console.log(stage);
    setTimeout(() => {
      if (stage.index < sequence.length - 1) {
        setStage(sequence[stage.index + 1]);
      }
    }, 1000 * stage.duration);
  }, [stage]);
  return <>{stage.scene}</>;
};
