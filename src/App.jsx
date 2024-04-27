import { useState } from "react";
import Menu from "./Menu";
import menu from "./data";
import Title from "./Title";
import Category from "./Category";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [items, setItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <main>
      <Title name="Our Product" />
      <Category categories={categories} filterItems={filterItems} />
      <Menu items={items} />
    </main>
  );
};
export default App;
