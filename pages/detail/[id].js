import axios from "axios";
import Head from "next/head";
import Item from "../../src/component/Item";

const Post = ({ item, name }) => {
  
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '740' } },
      { params: { id: '730' } },
      { params: { id: '729' } },
    ],
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