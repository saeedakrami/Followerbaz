import { keyframes } from "styled-components";

const flash = keyframes`
    0% {
        transform: scale(0,0);
    }

    80% {
        transform: scale(1.25,1.25);
    }

    100% {
        transform: scale(1,1);
    }
`;

const up = keyframes`
  0% {
  top: 90px;
  }
  100% {
  top: 0;
  }
`;

const zoom = keyframes`
from {
    opacity: 1;
    transform: scale(0,0) rotate(-45deg);
}
50% {
    opacity: 1;
    transform: scale(1.25,1.25) rotate(-45deg);
}
65% {
    opacity: 1;
    transform: scale(0.75,0.75) rotate(-45deg);
}
80% {
    opacity: 1;
    transform: scale(1.25,1.25) rotate(-45deg);
}

to {
    opacity: 1;
    transform: scale(1,1) rotate(-45deg);
}
`;

export { flash, up, zoom };
