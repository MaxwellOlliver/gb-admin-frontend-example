import { PropsWithChildren } from "react";
import { getAnimationKeyframes, IAnimatePresenceComponentProps } from ".";
import { Container } from "./styles";

function AnimatePresenceComponent({
  children,
  className,
  animationOptions,
}: PropsWithChildren<IAnimatePresenceComponentProps>): JSX.Element {
  const {
    animationType = "onlyFadeIn",
    animationTimingFunction = "ease",
    animationDuration = "0.2s",
  } = animationOptions || {};

  return (
    <Container
      animationKeyframes={getAnimationKeyframes(animationType)}
      animationTimingFunction={animationTimingFunction}
      animationDuration={animationDuration}
      className={className}
    >
      <div className="animation-presence__wrapper">{children}</div>
    </Container>
  );
}

export default AnimatePresenceComponent;
