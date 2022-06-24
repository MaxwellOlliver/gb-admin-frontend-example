import {classNames} from '@/utils/classNames';
import styled from 'styled-components';

const Container = styled.td`
  padding-inline-start: 1.5rem;
  padding-inline-end: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  color: #3c3c3c;
  font-weight: 600;

  .td__wrapper {
    width: 100%;
  }

  &.--actions {
    .td__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      > svg {
        cursor: pointer;
      }
    }
  }
`;

interface ITdProps extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
  children?: React.ReactNode;
  actions?: boolean;
}

export default function Td({children, actions, ...props}: ITdProps) {
  return (
    <Container
      className={classNames({
        '--actions': actions,
      })}
      {...props}
    >
      <div className="td__wrapper">{children}</div>
    </Container>
  );
}
