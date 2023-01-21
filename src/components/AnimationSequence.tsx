import { useEffect, useState } from "react";
import { AnimationScene } from "./AnimationScene";
import { CharacterAnimations } from "./Character";

interface animState {
  scene: JSX.Element;
  duration: number;
  index: number;
}

interface mageSequence {
  spear: animState[];
  shield: animState[];
  dagger: animState[];
  bow: animState[];
  spell: animState[];
}

interface knightSequence {
  spear: mageSequence;
  shield: mageSequence;
  dagger: mageSequence;
  bow: mageSequence;
  spell: mageSequence;
}

const sequences: knightSequence = {
  spear: {
    spear: [
      {
        scene: <AnimationScene knightAnim={"spear"} mageAnim={"spear"} />,
        duration: 1.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"walk"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    shield: [
      {
        scene: <AnimationScene knightAnim={"spear"} mageAnim={"shield"} />,
        duration: 1.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"hurt"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    dagger: [
      {
        scene: (
          <AnimationScene
            knightAnim={"spear"}
            mageAnim={"dagger"}
            mageDelay={0.4}
          />
        ),
        duration: 1.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"walk"} mageAnim={"hurt"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    bow: [
      {
        scene: (
          <AnimationScene
            knightAnim={"spear"}
            mageAnim={"bow"}
            knightDelay={1}
          />
        ),
        duration: 2.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"hurt"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    spell: [
      {
        scene: (
          <AnimationScene
            knightAnim={"spear"}
            mageAnim={"spell"}
            mageDelay={0.2}
          />
        ),
        duration: 1.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"walk"} mageAnim={"hurt"} />,
        duration: 1.6,
        index: 1,
      },
    ],
  },
  shield: {
    spear: [
      {
        scene: <AnimationScene knightAnim={"shield"} mageAnim={"spear"} />,
        duration: 1.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"hurt"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    shield: [
      {
        scene: <AnimationScene knightAnim={"shield"} mageAnim={"shield"} />,
        duration: 2,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"walk"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    dagger: [
      {
        scene: <AnimationScene knightAnim={"shield"} mageAnim={"dagger"} />,
        duration: 1.2,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"hurt"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    bow: [
      {
        scene: <AnimationScene knightAnim={"shield"} mageAnim={"bow"} />,
        duration: 2.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"walk"} mageAnim={"hurt"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    spell: [
      {
        scene: <AnimationScene knightAnim={"shield"} mageAnim={"spell"} />,
        duration: 1.4,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"hurt"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
  },
  dagger: {
    spear: [
      {
        scene: (
          <AnimationScene
            knightAnim={"dagger"}
            mageAnim={"spear"}
            knightDelay={0.4}
          />
        ),
        duration: 1.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"walk"} mageAnim={"hurt"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    shield: [
      {
        scene: <AnimationScene knightAnim={"dagger"} mageAnim={"shield"} />,
        duration: 1.4,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"walk"} mageAnim={"hurt"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    dagger: [
      {
        scene: <AnimationScene knightAnim={"dagger"} mageAnim={"dagger"} />,
        duration: 1.4,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"walk"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    bow: [
      {
        scene: (
          <AnimationScene
            knightAnim={"dagger"}
            mageAnim={"bow"}
            knightDelay={1.4}
          />
        ),
        duration: 2.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"hurt"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    spell: [
      {
        scene: (
          <AnimationScene
            knightAnim={"dagger"}
            mageAnim={"spell"}
            knightDelay={0.2}
          />
        ),
        duration: 1.4,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"hurt"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
  },
  bow: {
    spear: [
      {
        scene: (
          <AnimationScene knightAnim={"bow"} mageAnim={"spear"} mageDelay={1} />
        ),
        duration: 2.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"walk"} mageAnim={"hurt"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    shield: [
      {
        scene: <AnimationScene knightAnim={"bow"} mageAnim={"shield"} />,
        duration: 2.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"hurt"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    dagger: [
      {
        scene: (
          <AnimationScene
            knightAnim={"bow"}
            mageAnim={"dagger"}
            mageDelay={1.4}
          />
        ),
        duration: 2.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"walk"} mageAnim={"hurt"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    bow: [
      {
        scene: <AnimationScene knightAnim={"bow"} mageAnim={"bow"} />,
        duration: 2.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"walk"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    spell: [
      {
        scene: (
          <AnimationScene
            knightAnim={"bow"}
            mageAnim={"spell"}
            mageDelay={1.2}
          />
        ),
        duration: 2.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"hurt"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
  },
  spell: {
    spear: [
      {
        scene: (
          <AnimationScene
            knightAnim={"spell"}
            mageAnim={"spear"}
            knightDelay={0.2}
          />
        ),
        duration: 1.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"hurt"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    shield: [
      {
        scene: <AnimationScene knightAnim={"spell"} mageAnim={"shield"} />,
        duration: 1.4,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"walk"} mageAnim={"hurt"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    dagger: [
      {
        scene: (
          <AnimationScene
            knightAnim={"spell"}
            mageAnim={"dagger"}
            mageDelay={0.2}
          />
        ),
        duration: 1.4,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"hurt"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    bow: [
      {
        scene: (
          <AnimationScene
            knightAnim={"spell"}
            mageAnim={"bow"}
            knightDelay={1.2}
          />
        ),
        duration: 2.6,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"walk"} mageAnim={"hurt"} />,
        duration: 1.6,
        index: 1,
      },
    ],
    spell: [
      {
        scene: <AnimationScene knightAnim={"spell"} mageAnim={"spell"} />,
        duration: 1.4,
        index: 0,
      },
      {
        scene: <AnimationScene knightAnim={"walk"} mageAnim={"walk"} />,
        duration: 1.6,
        index: 1,
      },
    ],
  },
};

export const AnimationSequence = ({
  knightAnim = "bow",
  mageAnim = "spear",
}: {
  knightAnim?: keyof knightSequence;
  mageAnim?: keyof mageSequence;
}) => {
  const sequence = sequences[knightAnim][mageAnim];
  const [stage, setStage] = useState(sequence[0]);
  useEffect(() => {
    setTimeout(() => {
      if (stage.index < sequence.length - 1) {
        setStage(sequence[stage.index + 1]);
      }
    }, 1000 * stage.duration);
  }, [stage]);
  return <>{stage.scene}</>;
};
