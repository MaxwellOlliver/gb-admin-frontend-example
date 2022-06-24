import styled from "styled-components";
import { classNames } from "@/utils/classNames";
import { forwardRef, PropsWithChildren } from "react";

const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-variant-numeric: lining-nums tabular-nums;

  &.--secondary {
    tr {
      th {
        background-color: #dedede;
        color: #023535;
      }
    }
  }
`;

interface ITableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  secondary?: boolean;
}

const Table = forwardRef<HTMLTableElement, PropsWithChildren<ITableProps>>(
  function Table({ children, secondary, ...props }, ref) {
    return (
      <Container
        className={classNames({
          "--secondary": secondary,
        })}
        {...props}
        ref={ref}
      >
        {children}
      </Container>
    );
  }
);

export default Table;
