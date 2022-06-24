import {Container} from './styles';

interface AvatarProps {
  src?: string;
  size?: number;
}

export default function Avatar({size = 40, src}: AvatarProps): JSX.Element {
  const username = 'José Fernandes';

  return (
    <Container size={size}>
      {!src ? (
        <span>
          {username
            .split(' ')
            .slice(0, 2)
            .map((name) => name.charAt(0))
            .join('')}
        </span>
      ) : (
        <img src={src} alt="avatar" />
      )}
    </Container>
  );
}
