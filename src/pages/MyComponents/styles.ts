import {easeInOutQuartic} from '@/config/customAnimations';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  h2 {
    margin-bottom: 1rem;
  }

  .custom-component {
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    &.--input {
      & > * {
        max-width: 300px;
      }
    }

    & > * {
      margin-right: 1rem;
      margin-bottom: 1rem;
    }

    .table__edit-toggle {
      transition: transform 0.3s ${easeInOutQuartic};

      &.--active {
        transform: rotate(-180deg);
      }
    }
  }
`;
