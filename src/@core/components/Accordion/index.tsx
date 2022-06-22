/* eslint-disable nonblock-statement-body-position */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useRef, useState } from "react";
import useResize from "@/hooks/useResize";
import { Container } from "./styles";
import { classNames } from "@/utils/classNames";

interface IAccordionProps {
  children: (ref: React.MutableRefObject<any>) => JSX.Element;
  isOpen: boolean;
  style?: React.CSSProperties;
}

function Accordion({ children, isOpen, style }: IAccordionProps) {
  const [maxHeight, setMaxHeight] = useState("0px");
  const content = useRef<HTMLElement>(null);
  const { width } = useResize();

  useEffect(() => {
    if (content.current) {
      content.current.addEventListener("click", () => console.log("chamou"));
      const height = getComputedStyle(content.current).height;
      setMaxHeight(height);
    }
  }, [width, isOpen]);

  if (typeof children !== "function")
    throw new Error("Children must be a function");

  return (
    <Container
      className={classNames("accordion-wrapper", {
        "--animate": isOpen,
      })}
      maxHeight={maxHeight}
      isOpen={isOpen}
      style={style}
    >
      {children(content)}
    </Container>
  );
}

export default Accordion;
