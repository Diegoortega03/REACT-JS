import { ItemCard } from "./ItemCard";
import styles from "./ItemList.module.css";

export const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div className={styles.ContainerItemList}>
      {items.map((item) => {

        
        return <ItemCard item={item} key={item.id}  />;
      })}
    </div>
  );
};



