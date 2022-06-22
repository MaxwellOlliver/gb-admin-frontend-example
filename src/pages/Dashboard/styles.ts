import { easeInOutQuartic } from "@/config/customAnimations";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: #f3f3f3;
  height: 100%;
  display: flex;
  justify-content: flex-end;

  .dashboard__wrapper {
    display: flex;
    width: 100%;
    max-width: calc(100% - ${(props) => props.theme.sizes.sidebarWidth});
    min-height: 100vh;

    transition: all 0.5s ${easeInOutQuartic};
    margin-left: ${(props) => props.theme.sizes.sidebarWidth};
    padding: calc(${(props) => props.theme.sizes.navbarHeight} + 1rem) 1.5rem
      1rem;

    > div {
      width: 100%;
      max-height: calc(
        100vh - ${(props) => props.theme.sizes.navbarHeight} - 2rem
      );
    }

    @media screen and (max-width: 1199px) {
      margin-left: 0;
      max-width: 100%;
    }
    @media screen and (max-width: 576px) {
      padding: calc(${(props) => props.theme.sizes.navbarHeight} + 1rem) 0.75rem
        1rem;
    }
  }
`;
