import styled from 'styled-components';

const Container = styled.div`
  display: block;
  white-space: nowrap;
  overflow: auto hidden;
  max-width: 100%;
  width: 100%;
`;

interface ITableContainerProps {
  children?: React.ReactNode;
}

export default function TableContainer({children}: ITableContainerProps) {
  return <Container>{children}</Container>;
}
