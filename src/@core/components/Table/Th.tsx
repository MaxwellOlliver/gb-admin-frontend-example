import {classNames} from '@/utils/classNames';
import styled from 'styled-components';

const Container = styled.th`
  background-color: #1b4949;

  padding-inline-start: 1.5rem;
  padding-inline-end: 1.5rem;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  font-weight: 600;
  text-align: start;
  text-transform: uppercase;
  font-size: 0.75rem;

  color: #fff;

  &:first-child {
    border-radius: 5px 0px 0 0;
  }
  &:last-child {
    border-radius: 0px 5px 0 0;
  }

  &.--actions {
    width: 80px;

    .th__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

interface ThProps extends React.TableHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  actions?: boolean;
}

export default function Th({children, actions, ...props}: ThProps) {
  return (
    <Container
      className={classNames({
        '--actions': actions,
      })}
      {...props}
    >
      <div className="th__wrapper">{children}</div>
    </Container>
  );
}
