import { ItemCard } from "./ItemCard";


export const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div style={{ display: "flex", border:"2px solid blue" , justifyContent:"space-evenly", flexWrap:"wrap"  }}>
      {items.map((item) => {
        return (
       <ItemCard item={item} key={item.id}/>
        );
      })}
    </div>
  );
};


