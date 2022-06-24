import {easeInOutQuartic} from '@/config/customAnimations';
import styled from 'styled-components';
import {elementsIndex} from '../../config/theme';

interface INavbar {
  forceFullscreen?: boolean;
}

export const Container = styled.div<INavbar>`
  width: calc(100% - ${({theme}) => theme.sizes.sidebarWidth});
  z-index: ${elementsIndex.navbar};
  position: fixed;
  right: 0;
  top: 0;
  transition: width 0.5s ${easeInOutQuartic};
  backdrop-filter: blur(3px);
  height: ${(props) => props.theme.sizes.navbarHeight};

  @media screen and (max-width: 1199px) {
    width: calc(100% - 60px);
  }

  nav {
    background-color: ${(props) => props.theme.colors.primary[900]};
    height: 100%;

    display: flex;
    align-items: center;

    justify-content: space-between;
    padding: 0 1.5rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: #fff;

    .nav__company-select {
      display: flex;
      align-items: center;

      label {
        margin-right: 5px;
      }

      .company-select__input {
        display: flex;
        justify-content: space-between;
        min-width: 130px;
        color: ${(props) => props.theme.colors.primaryGreenBelt};
        border-bottom: 1px solid #fafbfc60;
        padding: 0.25rem 0;
        cursor: pointer;
      }
    }

    .nav__user-content {
      display: flex;
      align-items: center;

      .user-content__menu {
        display: flex;
        align-items: center;

        .menu__icon {
          position: relative;
          margin-right: 0.75rem;
          display: flex;
          cursor: pointer;

          .icon__notification {
            width: 6px;
            height: 6px;
            border: 1px solid #fff;
            background-color: ${(props) =>
              props.theme.colors.feedBack.alertDark};
            border-radius: 50%;
            position: absolute;
            top: 0;
            right: 0;
          }

          &:first-child {
            margin-right: 2rem;
          }
        }
      }

      .user-content__info {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding-left: 1rem;
        border-left: 1px solid #ffffff30;

        .info__text-column {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 5px;

          .text-column__username {
            text-align: right;
          }

          .text-column__position {
            color: ${(props) => `${props.theme.colors.primaryGreenBelt}80`};
          }
        }
      }
    }
  }
`;
