import styled from "styled-components";

export const TechnologiesContainer = styled.div`
  box-sizing: border-box;
`;
export const GridContainerA = styled.div`
  --base: 5vw;
  --tablet: calc(var(--base) * 1.6);
  --mobile: calc(var(--base) * 3);
  width: fit-content;
  margin-top: 2.5vw;
  display: grid;
  grid-template-columns:
    var(--base) var(--base) calc(var(--base) * 1.5) var(--base)
    var(--base);
  grid-template-rows: repeat(5, var(--base));
  @media only screen and (max-width: 980px) {
    margin-top: 0;
    grid-template-columns: repeat(5, var(--tablet));
    grid-template-rows:
      var(--tablet) var(--tablet) calc(var(--tablet) * 1.5) var(--tablet)
      var(--tablet);
    height: calc(5 * var(--tablet));
    width: 100%;
    align-content: center;
    justify-content: center;
    transform: rotate(90deg);
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(5, var(--mobile));
    grid-template-rows:
      var(--mobile) var(--mobile) calc(var(--mobile) * 1.5) var(--mobile)
      var(--mobile);
    height: calc(5 * var(--mobile));
  }
`;
export const GridTxt = styled.p`
  cursor: pointer;
  display: inline;
  font-size: calc(0.18 * var(--base));
  font-weight: 500;
  @media only screen and (max-width: 980px) {
    transform: rotate(-90deg);
    font-size: calc(0.18 * var(--tablet));
  }
  @media only screen and (max-width: 480px) {
    font-size: calc(0.18 * var(--mobile));
  }
`;
export const GridCell = styled.div`
  width: var(--base);
  height: var(--base);
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 980px) {
    width: var(--tablet);
    height: var(--tablet);
  }
  @media only screen and (max-width: 480px) {
    width: var(--mobile);
    height: var(--mobile);
  }
`;
export const GridFull = styled(GridCell)`
  width: calc(var(--base) * 1.5);
  border: 1px white solid;
  background: radial-gradient(
    closest-side at 50% 50%,
    #6a42d1 -20%,
    #23222200 100%
  );
  @media only screen and (max-width: 980px) {
    width: var(--tablet);
    height: calc(var(--tablet) * 1.5);
  }
  @media only screen and (max-width: 480px) {
    width: var(--mobile);
    height: calc(var(--mobile) * 1.5);
  }
`;
export const GridTopBottom = styled(GridCell)`
  border-top: 1px white solid;
  border-bottom: 1px white solid;
  @media only screen and (max-width: 980px) {
    width: var(--tablet);
    height: calc(var(--tablet) * 1.5);
  }
  @media only screen and (max-width: 480px) {
    width: var(--mobile);
    height: calc(var(--mobile) * 1.5);
  }
`;
export const GridLeftRight = styled(GridCell)`
  width: calc(var(--base) * 1.5);
  border-left: 1px white solid;
  border-right: 1px white solid;
  @media only screen and (max-width: 980px) {
    width: var(--tablet);
    height: var(--tablet);
  }
  @media only screen and (max-width: 480px) {
    width: var(--mobile);
    height: var(--mobile);
  }
`;
export const GridRight = styled(GridCell)`
  width: calc(var(--base) * 1.5);
  border-right: 1px white solid;
  @media only screen and (max-width: 980px) {
    width: var(--tablet);
    height: var(--tablet);
  }
  @media only screen and (max-width: 480px) {
    width: var(--mobile);
    height: var(--mobile);
  }
`;
export const GridLeft = styled(GridCell)`
  width: calc(var(--base) * 1.5);
  border-left: 1px white solid;
  @media only screen and (max-width: 980px) {
    width: var(--tablet);
    height: var(--tablet);
  }
  @media only screen and (max-width: 480px) {
    width: var(--mobile);
    height: var(--mobile);
  }
`;
export const GridTop = styled(GridCell)`
  border-top: 1px white solid;
  @media only screen and (max-width: 980px) {
    width: var(--tablet);
    height: calc(var(--tablet) * 1.5);
  }
  @media only screen and (max-width: 480px) {
    width: var(--mobile);
    height: calc(var(--mobile) * 1.5);
  }
`;
export const GridBottom = styled(GridCell)`
  border-bottom: 1px white solid;
  @media only screen and (max-width: 980px) {
    width: var(--tablet);
    height: calc(var(--tablet) * 1.5);
  }
  @media only screen and (max-width: 480px) {
    width: var(--mobile);
    height: calc(var(--mobile) * 1.5);
  }
`;

export const TechImg = styled.img`
  cursor: pointer;
  width: calc(var(--base) * 0.7);
  height: calc(var(--base) * 0.7);
  object-fit: contain;
  @media only screen and (max-width: 980px) {
    transform: rotate(-90deg);
    width: calc(var(--tablet) * 0.7);
    height: calc(var(--tablet) * 0.7);
  }
  @media only screen and (max-width: 480px) {
    width: calc(var(--mobile) * 0.7);
    height: calc(var(--mobile) * 0.7);
  }
`;
