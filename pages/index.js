import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Dimmer, Divider, Header, Loader, Segment } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  function getData() {
    axios.get(API_URL)
      .then((res) => {
        setList(res.data);
        setIsLoading(false);
      }
    );
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <div style={{ padding: "300px 0"}}>
        <Loader inline="centered" active />
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>HOME</title>
        <meta name="description" content="메이크업 쇼핑몰 입니다." ></meta>
      </Head>
      <Header as="h3" styles={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" styles={{ paddingTop: 40 }}>
        신상품
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </>
  )
}
