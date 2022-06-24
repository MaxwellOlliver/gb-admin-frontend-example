import React from 'react';
import {IconType} from 'react-icons';

import {Container} from './styles';

interface IButtonProps {
  variant?: 'solid' | 'outline';
  color?: 'primary' | 'secondary' | 'warn' | 'error';
  shadow?: boolean;
  rounded?: boolean;
  lg?: boolean;
  icon?: IconType;
}

export default function Button({
  variant = 'solid',
  color = 'primary',
  shadow,
  rounded,
  children,
  lg,
  icon: Icon,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps): JSX.Element {
  if (variant === 'outline' && color === 'secondary') {
    variant = 'solid';
  }

  return (
    <Container
      {...props}
      color={color}
      variant={variant}
      shadow={shadow}
      lg={lg}
      rounded={rounded}
    >
      {Icon && <Icon />}
      {children}
    </Container>
  );
}
