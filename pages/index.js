import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Divider, Header } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  function getData() {
    axios.get(API_URL)
      .then((res) => {
        setList(res.data);
      }
    );
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>HOME</title>
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
