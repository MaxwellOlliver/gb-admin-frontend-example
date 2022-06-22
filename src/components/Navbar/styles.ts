import styled from "styled-components";
import { elementsIndex } from "../../config/theme";

interface INavbar {
  forceFullscreen?: boolean;
}

export const Container = styled.div<INavbar>`
  width: calc(100% - ${({ theme }) => theme.sizes.sidebarWidth});
  z-index: ${elementsIndex.navbar};
  position: fixed;
  right: 0;
  top: 0;
  transition: width 0.5s ease;
  backdrop-filter: blur(3px);

  @media screen and (max-width: 1199px) {
    width: 100%;
  }

  nav {
    background-color: ${(props) => props.theme.colors.primary[900]};
    padding: 0.75rem 2rem;

    display: flex;
    align-items: center;

    justify-content: flex-end;

    .user-content {
      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 0.75rem;
      cursor: pointer;

      &.sidebar-toggle {
        @media screen and (min-width: 1200px) {
          visibility: hidden;
          cursor: default;
        }
      }

      ${(props) =>
        props.forceFullscreen &&
        `visibility: visible !important;
          cursor: pointer !important;`}
    }

    img {
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 576px) {
    padding: 1rem 0.75rem;
  }

  ${(props) => props.forceFullscreen && `width: 100% !important;`}
`;
