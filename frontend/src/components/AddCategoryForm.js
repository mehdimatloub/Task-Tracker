const Categories = () => {
    const categories = [
      { name: 'Works', count: 3 },
      { name: 'Sport', count: 10 },
      { name: 'Habits', count: 4 },
    ];
  
    return (
      <div className="categories-container">
        {categories.map((cat, idx) => (
          <div key={idx} className="category-card">
            <h4>{cat.name}</h4>
            <p>+{cat.count} task</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Categories;
  