import {forwardRef, HTMLProps, useRef, useState} from 'react';
import {IconType} from 'react-icons';
import {FiEye, FiEyeOff} from 'react-icons/fi';
import {classNames} from '@/utils/classNames';
import {Container} from './styles';

interface ICustomInputProps extends HTMLProps<HTMLInputElement> {
  labelText?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
}

const Input = forwardRef<HTMLInputElement, ICustomInputProps>(function Input(
  {labelText, leftIcon: LeftIcon, rightIcon: RightIcon, ...props},
  ref,
): JSX.Element {
  const [inputType, setInputType] = useState(props.type || 'text');
  const cacheInputType = useRef<string>(props.type as string);

  const toggleInputType = () => {
    if (inputType === 'password') {
      setInputType('text');
    } else if (cacheInputType) {
      setInputType('password');
    }
  };

  const handlePreventTypeLetters = (e: React.KeyboardEvent) => {
    if (!/[0-9]|Backspace/.test(e.key)) e.preventDefault();
  };

  return (
    <Container className="custom-input">
      <label htmlFor={props.name}>{labelText}</label>
      <div className="custom-input__wrapper">
        {LeftIcon && <LeftIcon />}
        <input
          {...props}
          type={inputType}
          ref={ref}
          onKeyDown={(e) => {
            props.type === 'number' && handlePreventTypeLetters(e);
            props.onKeyDown && props.onKeyDown(e);
          }}
          onKeyUp={(e) => {
            props.type === 'number' && handlePreventTypeLetters(e);
            props.onKeyUp && props.onKeyUp(e);
          }}
          onKeyPress={(e) => {
            props.type === 'number' && handlePreventTypeLetters(e);
            props.onKeyPress && props.onKeyPress(e);
          }}
        />
        {RightIcon && <RightIcon />}

        {cacheInputType.current === 'password' && (
          <div
            className={classNames('wrapper__visible-toggle', {
              '--right-icon': !!RightIcon,
            })}
          >
            {inputType === 'password' ? (
              <FiEye size={16} onClick={toggleInputType} />
            ) : (
              <FiEyeOff size={16} onClick={toggleInputType} />
            )}
          </div>
        )}
      </div>
    </Container>
  );
});

export default Input;
