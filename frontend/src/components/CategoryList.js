import React from "react";

const CategoryList = () => {
  const categories = [
    { name: "Works", count: 3 },
    { name: "Sport", count: 10 },
    { name: "Habits", count: 4 },
  ];

  return (
    <div className="left-column">
      {categories.map((category, idx) => (
        <div key={idx} className="category-card">
          <h4>{category.name}</h4>
          <p>+{category.count} task</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
