function List() {
  const colour = [
    { id: 1, name: "Blue", value: 95 },
    { id: 2, name: "Red", value: 45 },
    { id: 3, name: "Yellow", value: 88 },
    { id: 4, name: "Brown", value: 58 },
    { id: 5, name: "Black", value: 99 },
  ];
//   colour.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
// colour.sort((a,b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
// colour.sort((a,b) => a.value - b.value); // Numeric
// colour.sort((a,b) => b.value - a.value); // Reverse Numeric

 const listItems = colour.map(colour => <li key= {colour.id}>
    {colour.name}: &nbsp; <b>{colour.value}</b>
 </li>)
  return(<ol>{listItems}</ol>);
}




export default List;