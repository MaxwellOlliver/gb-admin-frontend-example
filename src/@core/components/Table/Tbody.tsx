import styled from 'styled-components';

const Container = styled.tbody`
  > tr {
    border: 1px solid #dedede;
    transition: background-color 0.3s;

    &:not(.--accordion-mode):hover {
      background-color: #e2f8f367;
    }
  }
`;

interface ITbodyProps
  extends React.TableHTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export default function Tbody({children, ...props}: ITbodyProps) {
  return <Container {...props}>{children}</Container>;
}
