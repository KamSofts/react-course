import { fruits } from './data.js';

const List2 = () => {

    fruits.sort((a, b) => a.name.localeCompare(b.name));

    const itemList = fruits.map(item => 
        <li key={item.id}><b>{item.name}</b> is {item.color}</li>
    );

    return (<ol>{itemList}</ol>);
};

export default List2;