import React from 'react';
import AnimatePresenceComponent from './AnimatePresenceComponent';
import {IAnimatePresenceComponentProps} from '.';

/**
 * Animates component when mounted. Ideal to animate route components.
 * @example
 * function MyComponent() {
 *  return <h1>hello world!</h1>
 * }
 *
 * export default animatePresence(MyComponent)
 * @author Maxwell Macedo <maxwell.macedo@moondev.com.br>
 */

function animatePresence<T = unknown>(
  AnimationTarget: React.FC<T>,
  options?: IAnimatePresenceComponentProps['animationOptions'],
) {
  return function AnimatePresence({...props}: T) {
    return (
      <AnimatePresenceComponent animationOptions={options}>
        <AnimationTarget {...props} />
      </AnimatePresenceComponent>
    );
  };
}

export {animatePresence};
