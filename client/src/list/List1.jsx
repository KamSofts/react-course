
const List1 = () => {
    const fruits = ["Orange", "Mango", "Graphs", "Apple", "Banana", "Banana"];

    const uniqueFruits = [...new Set(fruits)];
    uniqueFruits.sort();

    const itemList = uniqueFruits.map((item, index) => 
        <li key={index}>{item}</li>
    );

    return (<ol>{itemList}</ol>);
};

export default List1;