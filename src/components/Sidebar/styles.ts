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
    transition: opacity 0.3s;
    z-index: ${elementsIndex.overlay};
    opacity: 0;
    visibility: hidden;

    @media screen and (max-width: 1199px) {
      &.show {
        visibility: visible;
        opacity: 1;
      }
    }

    ${(props) =>
      props.forceFullscreen &&
      `&.show {
        visibility: visible;
        opacity: 1;
      }`}
  }
  .sidebar {
    width: ${(props) => props.theme.sizes.sidebarWidth};
    min-height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #454545;
    transition: width 0.5s ease;
    z-index: ${elementsIndex.sidebar};
    color: #fff;
    display: flex;
    overflow: hidden;

    @media screen and (max-width: 1199px) {
      width: 60px;
    }

    &.open {
      width: ${(props) => props.theme.sizes.sidebarWidth};
    }

    .sidebar__left-menu {
      width: 60px;
      min-width: 60px;
      height: 100vh;
      background-color: ${(props) => props.theme.colors.primary[900]};
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 0;

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

              transition: left 0.1s ease-in-out;
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
      height: 100vh;
      overflow: hidden auto;
      display: flex;
      flex-direction: column;

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

        li {
          height: 50px;
          width: 100%;

          display: flex;
          align-items: center;
          padding: 0 1rem;
          cursor: pointer;
          border-left: 4px solid ${(props) => props.theme.colors.graysScale[10]};

          &.--link {
            /* border-left: 4px solid
            ${(props) => props.theme.colors.graysScale[10]}; */
            &.--active {
              background-color: ${(props) => props.theme.colors.primary[50]};
              border-left: 4px solid
                ${(props) => props.theme.colors.primaryGreenBelt};

              svg {
                color: ${(props) => props.theme.colors.primaryGreenBelt};
              }
            }
          }

          &.--subcategory {
            justify-content: space-between;

            svg {
              transition: transform 0.3s;
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

    .sidebar-options,
    .tab-ul {
      padding: 1rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      list-style: none;
      div {
        width: 100%;
      }
      li {
        width: 100%;
        padding: 10px 1.5rem;
        color: ${(props) => props.theme.colors.graysScale.gray};
        display: flex;
        align-items: center;
        border-radius: 10px;
        margin-bottom: 10px;
        background-color: #fff;
        transition: all 0.3s;

        &.logo {
          padding: 0px 2rem;
          margin-bottom: 2rem;

          svg {
            display: none;
            margin-left: 10px;
            cursor: pointer;
          }

          img {
            width: 100%;
          }

          @media screen and (max-width: 1199px) {
            display: flex;
            justify-content: space-between;
            padding: 0px 1rem;

            img {
              width: calc(100% - 18px - 20px);
            }

            svg {
              display: block;
            }
          }
        }

        &.header {
          color: #ccc;
          padding: 0 0.75rem;
          font-weight: 300;
          margin-top: 1rem;
          font-size: 14px;
        }

        &.link {
          cursor: pointer;
          &:not(.active):not(.logo):hover {
            filter: brightness(0.9);
          }
          svg {
            margin-right: 10px;
          }

          &.active {
            color: #fff;
            background-color: ${(props) => props.theme.colors.primary[900]};
            box-shadow: 0px 0px 10px 0px
              ${(props) => props.theme.colors.primary[900]};
            cursor: default;
          }
        }

        &.tab {
          cursor: pointer;
          &:not(.active):not(.logo):hover {
            filter: brightness(0.9);
          }
          svg {
            margin-right: 10px;
            transition: transform 0.3s ease;
          }

          &.active {
            filter: brightness(0.9);

            svg {
              transform: rotate(90deg);
            }
          }
        }
      }

      .tab-ul {
        width: 100%;
        padding: 0;

        li:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;
