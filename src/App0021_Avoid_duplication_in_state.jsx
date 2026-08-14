import { useState } from 'react';

const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
];

function Menu(){
    const [choosedItem, setChoosedItem] = useState(0);
    const [items, setItems] = useState(initialItems);

    const selectedItem = items.find(item => item.id === choosedItem);

    function handleChooseClick(itemId){
        setChoosedItem(itemId);
    }

    function handleChange(e, itemId){
        const newItems = items.map(item => {
            if (item.id === itemId) {
                return { ...item, title: e.target.value,};
            } else {
                return item;
            }
        })
        setItems(newItems);
    }

    return (
        <>
            <h1>What's your travel snack?</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <input onChange={(e) => handleChange(e, item.id)} value={item.title} /> 
                        <button onClick={() => handleChooseClick(item.id)}>Choose</button>
                    </li>
                    
                ))}
            </ul>
            <p>You picked {selectedItem.title}</p>
        </>
    )
}

export default function App(){
    return(
        <Menu />
    )
}