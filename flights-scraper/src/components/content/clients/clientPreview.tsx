import { Client, ClientOff } from "./clientStyles";

export default function ClientPreview({client, setClientIdToShow}:any) {
  return (
    <Client onClick={() => setClientIdToShow(client.id)}>
      {client.isOn ? (
        <img src={client.logo} alt="NA" />
      ) : (
        <ClientOff>
          <img src={client.logo} alt="NA" />
        </ClientOff>
      )}
    </Client>
  );
}
