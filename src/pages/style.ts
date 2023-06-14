import styled, { keyframes } from "styled-components";
export const IndexBox = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: radial-gradient(
    circle at 33% 0%,
    rgba(17, 19, 227, 0.7) 0%,
    black 50%,
    black 100%
  );
`;
export const IndexLeft = styled.div``;
export const IndexRight = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 6rem;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Introduction = styled.div`
  font-weight: 700;
`;
export const Introduction2 = styled.div`
  font-style: italic;
`;

export const Contract = styled.div`
  font-weight: 800;
  font-size: 1.25rem;
  margin-bottom: 15px;
`;
export const BtnBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;
export const Btn = styled.button`
  width: 150px;

  padding: 10px 20px 10px 10px;
  border-radius: 10px;
  text-align: left;
  box-sizing: border-box;
  position: relative;
  background: rgb(17, 19, 227);
  color: #fff;
  font-weight: 700;
  transition: all 0.5s;
  ::before {
    content: "→";
    position: absolute;
    bottom: 0;
    top: 13px;
    margin: auto 0;
    right: 20px;
    transform: scale(1.5);
  }
  :hover {
    color: #fff;
    background: #000;
    transform: scale(1.2);
  }
`;

export const StrokeTetx = styled.div`
  -webkit-text-stroke: 2px #5e98cb;
  color: #000;
`;
const breatheAnimation = keyframes`
 0% {transform: rotate(-10deg) translateX(0px); }
 25% { transform: rotate(-10deg) translateX(100%); }
 50% { transform: rotate(-10deg) translateX(-100%); }
 100% { transform: rotate(-10deg) translateX(0px); }

`;
export const TopImg = styled.div`
  width: 90%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  transform: rotate(-10deg) translateX(-3%);
  /* animation-name: ${breatheAnimation}; */
  /* animation-duration: 2s; */
  /* animation-timing-function: linear; */
  /* animation-iteration-count: infinite; */
`;
export const LineImg = styled.img`
  border: 2px solid #fff;
  height: 100%;
  width: 19%;
  margin: 0 20px;
  object-fit: contain;
`;
