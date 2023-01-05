import ItemList from "./ItemList";

function Content({ items, handleChecked, handleDelete }) {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your Cart Is Empty</p>
      )}
    </>
  );
}

export default Content;
