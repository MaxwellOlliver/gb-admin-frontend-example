import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-width: max-content;
  transition: all 0.3s ease-in-out;

  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-size: 0.875rem;
  }

  .custom-input__wrapper {
    position: relative;
    display: flex;
    border: 1px solid #3c3c3c;
    border-radius: 5px;
    align-items: center;
    padding: 0 10px;

    svg {
      min-width: 16px;
      color: ${(props) => props.theme.colors.primary[900]};

      &:first-child {
        margin-right: 0.5rem;
      }
      &:last-child {
        margin-left: 0.5rem;
      }
    }

    input {
      width: 100%;
      min-height: 40px;
      font-size: 1rem;
      outline: none;
      transition: all 0.3s;
      background: none;

      &::placeholder {
        color: #c2c2c2;
        font-weight: 300;
      }

      &:disabled {
        cursor: default;
        border-color: ${(props) => props.theme.colors.graysScale[700]};
        background-color: ${(props) => props.theme.colors.graysScale[100]};
      }
    }

    .wrapper__visible-toggle {
      svg {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        right: 10px;
      }

      &.--right-icon {
        svg {
          right: 25px;
        }
      }
    }
  }
`;
