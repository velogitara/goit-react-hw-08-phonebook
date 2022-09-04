import { Circles } from 'react-loader-spinner';
import { CircleContainer } from './Loader.styled';

export default function Loader({ size }) {
  return (
    <CircleContainer size={size}>
      <Circles
        width={size === 'large' ? 40 : 10}
        height={size === 'large' ? 40 : 10}
        color="#00BFFF"
      />
    </CircleContainer>
  );
}
