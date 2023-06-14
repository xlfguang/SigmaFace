
import {
  Btn,
  BtnBox,
  Contract,
  IndexBox,
  IndexLeft,
  IndexRight,
  Introduction,
  Introduction2,
  LineImg,
  StrokeTetx,
  Title,
  TopImg,
} from "./style";
import img1 from "/src/assets/img1.png";
import img2 from "/src/assets/img2.png";
import img3 from "/src/assets/img3.png";
import img4 from "/src/assets/img4.png";
import img5 from "/src/assets/img5.png";
import img6 from "/src/assets/img6.png";
import img7 from "/src/assets/img7.png";
import img8 from "/src/assets/img8.png";
import img9 from "/src/assets/img9.png";
import img10 from "/src/assets/img10.png";
import img12 from "/src/assets/img12.png";
import img13 from "/src/assets/img13.png";
import img14 from "/src/assets/img14.png";
import img16 from "/src/assets/img16.png";

function Index() {
  return (
    <div>
      <IndexBox>
        <IndexLeft>
          <Title>
            Sigma
            <StrokeTetx>Face</StrokeTetx>
          </Title>
          <Introduction>trending meme face</Introduction>
          <Introduction2>
            First, frown.Then lower your eyebrows.Finally, add your pout.
          </Introduction2>
          <Contract>
            Contract Address:
            <a
              href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=ETH&outputCurrency=0xF13244DEe33F329eFe9E259BB49d59AfD7329213"
              target="_blank"
            >
              0xF132....29213
            </a>
          </Contract>
          <BtnBox>
            <Btn>DexTools</Btn>
            <a href="https://twitter.com/SigmaFaceCoin" target="_blank">
              <Btn>Twitter</Btn>
            </a>
          </BtnBox>
          <BtnBox>
            <a href="https://t.me/SigmaFaceEthEntry" target="_blank">
              <Btn>Telegram</Btn>
            </a>
            <a
              href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=ETH&outputCurrency=0xF13244DEe33F329eFe9E259BB49d59AfD7329213"
              target="_blank"
            >
              <Btn>Uniswap</Btn>
            </a>
          </BtnBox>
          <BtnBox>
            {/* PinkSale的跳转地址请修改a标签内的href */}
            <a href="https://t.me/SigmaFaceEthEntry" target="_blank">
              <Btn>PinkSale</Btn>
            </a>
          </BtnBox>
        </IndexLeft>
        <IndexRight>
          <TopImg>
            <LineImg src={img1}></LineImg>
            <LineImg src={img2}></LineImg>
            <LineImg src={img3}></LineImg>
            <LineImg src={img4}></LineImg>
            <LineImg src={img5}></LineImg>
          </TopImg>
          <TopImg>
            <LineImg src={img6}></LineImg>
            <LineImg src={img7}></LineImg>

            <LineImg src={img8}></LineImg>
            <LineImg src={img9}></LineImg>
            <LineImg src={img10}></LineImg>
          </TopImg>
          <TopImg>
            <LineImg src={img16}></LineImg>
            <LineImg src={img12}></LineImg>
            <LineImg src={img13}></LineImg>
            <LineImg src={img14}></LineImg>
          </TopImg>
          {/* <LineImg src={img3}></LineImg>
          <LineImg src={img4}></LineImg>
          <LineImg src={img5}></LineImg>
          <LineImg src={img6}></LineImg>
          <LineImg src={img7}></LineImg>
          <LineImg src={img8}></LineImg>
          <LineImg src={img9}></LineImg> */}
        </IndexRight>
      </IndexBox>
    </div>
  );
}

export default Index;
