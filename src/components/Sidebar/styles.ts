import { easeInOutQuartic } from "@/config/customAnimations";
import styled from "styled-components";
import { elementsIndex } from "../../config/theme";

interface ISidebar {
  forceFullscreen?: boolean;
}

export const Container = styled.div<ISidebar>`
  display: contents;

  .sidebar-overlay {
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #0000001a;
    transition: opacity 0.3s, visibility 0.3s;
    z-index: ${elementsIndex.overlay};
    opacity: 0;
    visibility: hidden;

    @media screen and (max-width: 1199px) {
      &.show {
        visibility: visible;
        opacity: 1;
      }
    }
  }
  .sidebar {
    width: ${(props) => props.theme.sizes.sidebarWidth};
    max-width: ${(props) => props.theme.sizes.sidebarWidth};
    min-height: 100vh;
    position: fixed;
    left: 0;
    top: 0;

    transition: width 0.5s ${easeInOutQuartic};
    z-index: ${elementsIndex.sidebar};
    color: #fff;
    display: flex;
    overflow: hidden;

    .sidebar__left-menu {
      width: 60px;
      min-width: 60px;
      height: 100vh;
      background-color: ${(props) => props.theme.colors.primary[900]};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
      z-index: 2;

      > svg {
        display: none;
        cursor: pointer;
        transition: transform 0.3s ${easeInOutQuartic};

        &.--is-open {
          transform: rotate(-180deg);
        }
      }

      .left-menu__categories-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .categories-wrapper__logo {
          margin-bottom: 1rem;
        }

        .categories-wrapper__categories {
          width: 100%;
          display: flex;
          flex-direction: column;
          list-style: none;

          li {
            height: 50px;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s;
            cursor: pointer;
            position: relative;

            .category__border {
              width: 4px;
              background-color: ${(props) =>
                props.theme.colors.primaryGreenBelt};
              height: 100%;
              position: absolute;
              top: 0;
              left: -4px;

              transition: left 0.1s ${easeInOutQuartic};
            }

            &.--active {
              background-color: ${(props) => props.theme.colors.primary[50]};

              .category__border {
                left: 0;
              }

              svg {
                color: ${(props) => props.theme.colors.primaryGreenBelt};
              }
            }
          }
        }
      }
    }

    .sidebar__right-menu {
      display: flex;
      width: 100%;
      min-width: calc(${(props) => props.theme.sizes.sidebarWidth} - 60px);
      height: 100vh;
      overflow: hidden auto;
      display: flex;
      flex-direction: column;
      background-color: #454545;
      transition: transform 0.5s ${easeInOutQuartic};

      .right-menu__active-category {
        width: 100%;
        height: calc(60px + 1rem + 1rem);
        display: flex;
        align-items: center;

        padding: 2rem 1rem;

        svg {
          margin-right: 10px;
        }

        h4 {
          font-weight: 600;
          text-transform: uppercase;
        }
      }

      .right-menu__subcategories {
        width: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;

        .subcategory__accordion {
          li {
            padding-left: calc(1rem + 10px);
          }
        }

        li {
          height: 50px;
          width: 100%;

          display: flex;
          align-items: center;
          padding: 0 1rem;
          cursor: pointer;

          transition: background-color 0.3s;
          position: relative;

          .subcategory__border {
            width: 4px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: ${(props) => props.theme.colors.graysScale[10]};

            transition: background-color 0.1s, left 0.1s ${easeInOutQuartic};
          }

          &.--link {
            &.--active {
              background-color: ${(props) => props.theme.colors.primary[50]};

              .subcategory__border {
                background-color: ${(props) =>
                  props.theme.colors.primaryGreenBelt};
              }

              svg {
                color: ${(props) => props.theme.colors.primaryGreenBelt};
              }
            }
          }

          &.--subcategory {
            justify-content: space-between;
            border: none;

            svg {
              transition: transform 0.3s;
            }

            &:not(.--active) {
              .subcategory__border {
                left: -4px;
              }
            }

            &.--active {
              background-color: ${(props) => props.theme.colors.graysScale[30]};

              svg {
                transform: rotate(90deg);
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 1199px) {
      width: 60px;

      .sidebar__left-menu {
        > svg {
          display: inline-block;
        }
      }

      .sidebar__right-menu {
        pointer-events: none;
        transform: translateX(-100%);
      }
    }

    &.open {
      width: 100%;
      overflow: hidden;

      .sidebar__right-menu {
        pointer-events: all;
        transform: translateX(0%);
      }
    }
  }
`;
