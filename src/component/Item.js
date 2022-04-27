import { Button, Divider, Header, Menu } from "semantic-ui-react";
import style from "../../styles/itemList.module.css"

export default function Item({ item }) {
  console.log(item);
  const {
    name,
    image_link,
    price,
    description,
    updated_at,
    category,
    product_type,
    product_link
  } = item;

  return (
    <>
      <div className={style.wrap}>
        <div className={style.img_item}>
          <img src={image_link} alt={name} />
        </div>
        <div className={style.info_item}>
          <strong className={style.tit_item}>{name}</strong>
          <strong className={style.num_price}>${price}</strong>
          <span className={style.txt_info}>
            {category ? `${category}/` : ""}
            {product_type}
          </span>
          <Button color="orange">구매하기</Button>
        </div>
      </div>
      <Divider />
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
      <Divider />
    </>
  )
}