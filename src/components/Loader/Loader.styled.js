import styled from 'styled-components';

export const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  position: ${({ size }) => (size === 'large' ? 'absolute' : 'static')};
  top: 45%;
  left: 35%;

  width: ${({ size }) => {
    switch (size) {
      case 'small':
        return '15px';

      case 'large':
        return '20px';
      default:
        break;
    }
  }};

  height: ${({ size }) => {
    switch (size) {
      case 'small':
        return '15px';

      case 'large':
        return '20px';
      default:
        break;
    }
  }};
`;
