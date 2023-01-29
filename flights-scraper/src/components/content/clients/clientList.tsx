import { useState } from "react";
import ClientPreview from "./clientPreview";
import { CLIENTS } from "../../../constants";
import { CLIENTS_TITLE } from "../../../constants/texts";
import {
  ClientContainer,
  ClientViewList,
  Author,
  ArrowBtn,
  MainTitle,
  ClientsWrapper,
  ClientContent,
} from "./clientStyles";
import { arrowLeft, arrowRight } from "../../../assets";

export default function ClientList() {
  const [curClientId, setCurClientId] = useState(0);
  const [count, setCount] = useState(0);
  let curClient = CLIENTS.find((client) => client.id === curClientId);
  CLIENTS.forEach((client) => {
    client.id === curClientId ? (client.isOn = true) : (client.isOn = false);
  });
  const setClientIdToShow = (id: any) => {
    setCurClientId(id);
  };
  const extendClientsRight = () => {
    if (count < CLIENTS.length - 3) setCount(count + 1);
  };
  const extendClientsLeft = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <ClientsWrapper>
      <ClientContainer>
        <MainTitle>
        {CLIENTS_TITLE}
        </MainTitle>
        <ClientViewList>
          <ArrowBtn onClick={extendClientsLeft}>
            <img src={arrowLeft} alt="" />
          </ArrowBtn>
          {CLIENTS.slice(count, count + 3).map((client) => (
            <ClientPreview
              key={client.id}
              client={client}
              setClientIdToShow={setClientIdToShow}
            />
          ))}
          <ArrowBtn onClick={extendClientsRight}>
            <img src={arrowRight} alt="" />
          </ArrowBtn>
        </ClientViewList>
        <ClientContent>{curClient?.review}</ClientContent>
        <Author>{curClient?.writtenBy}</Author>
      </ClientContainer>
    </ClientsWrapper>
  );
}
