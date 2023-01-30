import ServiceItem from "./servicePreview";
import { ItemsContainer } from "../products/productStyles";
import { ExploreText, ExploreWrapper } from "../main/mainStyles";
import { Link } from "react-scroll";
import { SERVICES } from "../../../constants";
import { TALK_BTN_TXT } from "../../../constants/texts";
import { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

export default function ServicesList() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <ItemsContainer>
        {SERVICES.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </ItemsContainer>
      <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
      <ExploreWrapper>
        <Link
          to="ContactForm"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          <ExploreText>{TALK_BTN_TXT}</ExploreText>
        </Link>
      </ExploreWrapper>
    </div>
  );
}
