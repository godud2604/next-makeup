import Image from "next/image";
import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: 'flex', paddingTop: 20 }}>
        <div style={{ flex: '100px 0 0' }}>
          <Image src="/images/clouds.jpg" alt="clouds" width="80" height="80" />
        </div>
        <Header as="h1">Hae Young</Header>
      </div>
      <Gnb />
    </div>
  )
}