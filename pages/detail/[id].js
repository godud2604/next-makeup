import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { Loader } from "semantic-ui-react";
import Item from "../../src/component/Item";

const Post = ({ item, name }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    )
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description} ></meta>
          </Head>
          <Item item={item} /> 
        </>
      )}
    </>
  )
};

export default Post;

// 개발 환경은 getStaticPath 와 getStaticProps가 요청할 때마다 호출이 되기때문에, 테스트하기에 더 편리하다.
// => 즉, 빈 화면이 나오고, 새로고침하면 또 빈 화면이 나온다.

export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    paths: data.slice(0, 9).map(item => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id; // context : params, 요청, query 등이 담겨있다.
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}