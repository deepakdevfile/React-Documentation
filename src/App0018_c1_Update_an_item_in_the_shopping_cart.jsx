import { useState } from 'react';

const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
}, {
    id: 1,
    name: 'Cheese',
    count: 5,
}, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
}];

function ShoppingCart() {
    const [
        products,
        setProducts
    ] = useState(initialProducts)

    function handleIncreaseClick(productId) {
        const newProducts = products.filter(product => {
            if (product.id === productId) {
                return product.count++;
            }
            else {
                return product;
            }
        });
        setProducts(newProducts);
    }

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}
                    {' '}
                    (<b>{product.count}</b>)
                    {' '}
                    <button onClick={() => {
                        handleIncreaseClick(product.id);
                    }}>
                        +
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default function App(){
    return(
        <ShoppingCart />
    )
}