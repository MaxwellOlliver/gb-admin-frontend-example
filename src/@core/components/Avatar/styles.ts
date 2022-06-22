import styled from "styled-components";

interface AvatarProps {
  size: number;
}

export const Container = styled.div<AvatarProps>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  max-width: ${(props) => `${props.size}px`};
  max-height: ${(props) => `${props.size}px`};
  min-width: ${(props) => `${props.size}px`};
  min-height: ${(props) => `${props.size}px`};
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${(props) => props.theme.colors.primary[900]};
    font-size: 1rem;
    font-family: "Metropolis", "sans-serif" !important;
    font-weight: 600;
  }
`;
