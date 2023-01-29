import { TechImg} from "./techAStyles";
import { Tooltip } from "antd";

export default function TechIcon({ item }: any) {
  const { logo, website, product } = item || {};
  const openWebsite = (url:string)=> {
    if (window.innerWidth>980) window.open(url)
  }
  if (!logo) return <></>;
  return (
    <Tooltip
      overlayInnerStyle={{ color: "black" }}
      trigger={"hover" || "click"}
      color="white"
      title={product}
    >
        <TechImg  src={logo} alt="NA" onClick={()=>openWebsite(website)} />
    </Tooltip>
  );
}
