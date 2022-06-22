import { easeInOutQuartic } from "@/config/customAnimations";
import styled from "styled-components";

interface IAccordionProps {
  isOpen: boolean;
  maxHeight: string;
}

export const Container = styled.div<IAccordionProps>`
  width: 100%;
  height: ${(props) => (props.isOpen ? props.maxHeight : 0)};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.3s, height 0.3s ${easeInOutQuartic};

  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};

  //overflow: hidden;
`;
