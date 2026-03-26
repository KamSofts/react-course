import { fruits, vegetables } from './data.js';

const List3 = (props) => {
    const { type, color } = props;
    const dataType = type || "Unknown";

    let sourceData = [];
    switch (dataType) {
        case "fruits":
            sourceData = fruits;
            break;
        case "vegetables":
            sourceData = vegetables;
            break;
        default:
            break;
    }

    const filteredData = color
        ? sourceData.filter(item => item.color === color)
        : sourceData;

    if (filteredData.length === 0) {
        return <h2>*** No {color ? color : ""} items in {dataType.toUpperCase()} group</h2>;
    }

    const itemList = filteredData.map(item =>
        <li key={item.id}><b>{item.name}</b> is {item.color}</li>
    );

    return (
        <>
            <h2>
                {dataType.toUpperCase()}
                {color && ` - Filtered by ${color}`}
            </h2>
            <ol>{itemList}</ol>
        </>
    );
}

export default List3;