import Card from "./Card";
import data from "../data";

function Content() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        // item={item}
        {...item}
      ></Card>
    );
  });
  return <div className="content">{cards}</div>;
}

export default Content;
