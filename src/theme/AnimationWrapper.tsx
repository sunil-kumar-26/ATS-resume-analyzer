import styled from "styled-components";

const TiltWrapper = styled.div`
  .tilt-in-left-1 {
    -webkit-animation: tilt-in-left-1 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: tilt-in-left-1 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @-webkit-keyframes tilt-in-left-1 {
    0% {
      -webkit-transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
      transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg) translateX(0) skewX(0deg);
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }
  @keyframes tilt-in-left-1 {
    0% {
      -webkit-transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
      transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg) translateX(0) skewX(0deg);
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }
`;

export { TiltWrapper };
