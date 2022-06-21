import { animatePresence } from "./animatePresence";
import AnimatePresenceComponent from "./AnimatePresenceComponent";
import getAnimationKeyframes from "./getAnimationKeyframes";

enum AnimationTypes {
  "slideLeft",
  "slideRight",
  "slideDown",
  "slideUp",
  "scaleIn",
  "scaleOut",
  "onlyFadeIn",
}

type Animation = keyof typeof AnimationTypes;

type AnimationTimingFunction =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out";

interface IAnimatePresenceComponentProps {
  className?: string;
  animationOptions?: {
    animationType?: Animation;
    animationTimingFunction?: AnimationTimingFunction;
    animationDuration?: string;
  };
}

export {
  animatePresence,
  AnimationTypes,
  AnimatePresenceComponent,
  getAnimationKeyframes,
};

export type {
  IAnimatePresenceComponentProps,
  Animation,
  AnimationTimingFunction,
};

export default animatePresence;
