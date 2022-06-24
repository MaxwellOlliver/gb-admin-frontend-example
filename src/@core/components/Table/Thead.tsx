import styled from 'styled-components';

const Container = styled.thead``;

type TheadProps = {children?: React.ReactNode};

export default function Thead({children}: TheadProps) {
  return <Container>{children}</Container>;
}
