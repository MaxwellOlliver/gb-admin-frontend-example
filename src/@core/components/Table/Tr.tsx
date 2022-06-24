import {classNames} from '@/utils/classNames';
import styled from 'styled-components';
import Td from './Td';
import Accordion from '../Accordion';

const Container = styled.tr`
  word-wrap: break-word;

  &.--accordion-mode {
    border-top: none;
    border-bottom: none;
  }

  &.--active {
    background-color: #e2f8f390;
  }
`;

interface TrProps extends React.TableHTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  accordionRow?: boolean;
  accordionIsOpen?: boolean;
  isActive?: boolean;
  columnCount?: number;
}

export default function Tr({
  children,
  accordionRow,
  accordionIsOpen,
  columnCount,
  isActive,
  ...props
}: TrProps) {
  return (
    <Container
      className={classNames({
        '--accordion-mode': accordionRow,
        '--active': isActive,
      })}
      {...props}
    >
      {accordionRow ? (
        <Td colSpan={columnCount} style={{padding: 0}}>
          <Accordion isOpen={!!accordionIsOpen}>
            {(ref) => (
              <div ref={ref} style={{width: '100%', padding: '2rem'}}>
                {children}
              </div>
            )}
          </Accordion>
        </Td>
      ) : (
        children
      )}
    </Container>
  );
}
