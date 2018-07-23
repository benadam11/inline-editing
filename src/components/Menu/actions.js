import uuid from "uuid";

const move = (arr, from, offset) => {
  arr.splice((from + offset: 1), 0, arr.splice(from, 1)[0]);
};

const newItem = () => ({
  id: uuid,
  heading: "New Item",
  subheading: "Add a description about this item",
  price: "12"
});

const newCategory = () => ({
  categoryId: uuid,
  heading: "New Category",
  subheading: "Add a description about this category",
  items: [newItem(), newItem()]
});

export const addItem = id => ({ data }) => {
  data.categories
    .find(category => category.categoryId === id)
    .items.push(newItem());
  return { data };
};

export const removeItem = id => ({ data }) => {
  data.categories.forEach(category => {
    category.items = category.items.filter(item => item.id !== id);
  });

  return { data };
};

export const moveItemLeft = id => ({ data }) => {
  data.categories.forEach(category => {
    const pos = category.items.map(item => item.id).indexOf(id);
    move(category.items, pos, -1);
  });

  return { data };
};

export const moveItemRight = id => ({ data }) => {
  data.categories.forEach(category => {
    const pos = category.items.map(item => item.id).indexOf(id);
    move(category.items, pos, 1);
  });

  return { data };
};

export const addCategory = ({ data }) => {
  data.categories.push(newCategory());
  return { data };
};

export const removeCategory = id => ({ data }) => {
  data.categories = data.categories.filter(
    category => category.categoryId !== id
  );
  return { data };
};

export const moveCategoryLeft = id => ({ data }) => {
  const pos = data.categories.map(item => item.id).indexOf(id);
  move(data.categories, pos, -1);
  return { data };
};

export const moveCategoryRight = id => ({ data }) => {
  const pos = data.categories.map(item => item.id).indexOf(id);
  move(data.categories, pos, 1);
  return { data };
};
