import { keyframes } from 'styled-components';

const hover = '@media (hover: hover)';

const fadeIn = keyframes`
  from {
    opacity: 0.1;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
export { hover, fadeIn };
