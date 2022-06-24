import styled from 'styled-components';

interface IBtnContainerProps {
  variant: 'solid' | 'outline';
  color: 'primary' | 'secondary' | 'alert' | 'error' | string;
  shadow?: boolean;
  rounded?: boolean;
  lg?: boolean;
}

enum btnVariants {
  SOLID = 'solid',
  OUTLINE = 'outline',
}

enum btnColors {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WARN = 'warn',
  ERROR = 'error',
}

export const Container = styled.button<IBtnContainerProps>`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: ${(props) => (props.lg ? '1.5rem 1.7rem' : '0 1.3rem')};
  cursor: pointer;
  transition: all 0.3s;

  &:disabled {
    cursor: default;
    ${(props) =>
      props.variant === 'solid'
        ? `
            background-color: ${props.theme.colors.graysScale[200]} !important;
            color: ${props.theme.colors.graysScale[400]} !important;
          `
        : `
            background: none !important;
            border: 2px solid ${props.theme.colors.graysScale[200]} !important;
            color: ${props.theme.colors.graysScale[400]} !important;
          `}
  }

  svg {
    margin-right: 0.5rem;
    min-width: 16px;
  }

  ${(props) => props.rounded && `width: 40px; padding: 0; border-radius: 50%;`}

  ${(props) => {
    switch (props.variant) {
      case btnVariants.SOLID:
        if (props.color === btnColors.WARN) {
          return `
            color: #fff;
            background-color: ${props.theme.colors.feedBack.alert};
            box-shadow: ${
              props.shadow
                ? `0px 0px 15px 0px ${props.theme.colors.feedBack.alert};`
                : 'none;'
            }

            &:hover {
              background-color: #8c690a;
            }
          `;
        }
        if (props.color === btnColors.ERROR) {
          return `
            color: #fff;
            background-color: ${props.theme.colors.feedBack.alertDark};
            box-shadow: ${
              props.shadow
                ? `0px 0px 15px 0px ${props.theme.colors.feedBack.alertDark};`
                : 'none;'
            }

            &:hover {
              background-color: #911419;
            }
          `;
        }
        if (props.color === btnColors.PRIMARY) {
          return `
            color: #fff;
            background-color: ${props.theme.colors.feedBack.success};
            box-shadow: ${
              props.shadow
                ? `0px 0px 15px 0px ${props.theme.colors.feedBack.success};`
                : 'none;'
            }

            &:hover {
              background-color: ${props.theme.colors.primary[900]};
            }
          `;
        }
        if (props.color === btnColors.SECONDARY) {
          return `
            color: ${props.theme.colors.primary[900]};
            background: none;
           
            &:hover {
              background-color: ${props.theme.colors.feedBack.success};
              color: #fff;
            }
          `;
        }

        break;
      case btnVariants.OUTLINE:
        if (props.color === btnColors.WARN) {
          return `
            color: ${props.theme.colors.feedBack.alert};
            background: none;
            border: 2px solid ${props.theme.colors.feedBack.alert};
            box-shadow: ${
              props.shadow
                ? `0px 0px 15px 0px ${props.theme.colors.feedBack.alert};`
                : 'none;'
            }
            &:hover {
              background-color: ${props.theme.colors.feedBack.alert};
              color: #fff;
            }
          `;
        }
        if (props.color === btnColors.PRIMARY) {
          return `
            color: ${props.theme.colors.feedBack.success};
            background: none;
            border: 2px solid ${props.theme.colors.feedBack.success};
            box-shadow: ${
              props.shadow
                ? `0px 0px 15px 0px ${props.theme.colors.feedBack.success};`
                : 'none;'
            }

            &:hover {
              background-color: ${props.theme.colors.feedBack.success};
              color: #fff;
            }
          `;
        }
        if (props.color === btnColors.ERROR) {
          return `
            color: ${props.theme.colors.feedBack.alertDark};
            background: none;
            border: 2px solid ${props.theme.colors.feedBack.alertDark};
            box-shadow: ${
              props.shadow
                ? `0px 0px 15px 0px ${props.theme.colors.feedBack.alertDark};`
                : 'none;'
            }

            &:hover {
              background-color: ${props.theme.colors.feedBack.alertDark};
              color: #fff;
            }
          `;
        }

        break;
    }
  }}
`;
