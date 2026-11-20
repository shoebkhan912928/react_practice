import react from 'react';
function Product(){
    const products=[
        {id:1, name : "keyboard", prince : 5000},
        {id:2, name : "mouse", prince : 2000},
        {id:3, name : "monitor", prince : 15000}
    ];
    return (
        <div>
            <h1>Welcome to my product store!</h1>
            {products.map(product=>(
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.prince}</p>
                </div>
            ))}
        </div>
    )
}
export default Product;