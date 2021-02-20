import { keyframes, css } from "@emotion/core"
import styled from "@emotion/styled"

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`

const upDown = keyframes`
  from {
    opacity:1;
    transform: translateY(0) rotate(0) scale(1);
  }
  to {
    opacity:0;
    transform: translateY(30px) rotate(360deg) scale(0.5);
  }
`

const upDownWide = keyframes`
  from {
    opacity:0.1;
    transform: translateY(0) rotate(0) scale(1);
  }
  to {
    opacity:1;
    transform: translateY(200px) rotate(10deg) scale(0.9);;
  }
`

const fadeIn = keyframes`
  from {
    opacity:0;
    transform: translateX(-100%);
  }
  to {
    opacity:1;
    transform: translateX(0);
  }
`

const upDownAnimation = css`
  ${upDown} 7s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 5s ease-in-out infinite alternate;
`
const fadeInAnimation = css`
  ${fadeIn} .5s cubic-bezier(.43,.61,.72,.83) forwards;
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const FadeIn = styled.div`
   width:100%;
   opacity:0;
   animation: ${fadeInAnimation};
`;

export const waveAnimation = (length: string) => css`
  animation: ${wave} ${length} linear infinite alternate;
`
