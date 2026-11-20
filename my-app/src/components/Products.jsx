import React from "react";
import { useState, useEffect } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        const controller = new AbortController()
        async function loadProducts() {
            try {
                const response = await fetch("https://fakestoreapi.com/products", { signal: controller.signal });
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                // console.log(data);
                setProducts(data);

            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        }

        loadProducts();

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div>
            <ul>
                {products.map(product => (
                <li key={product.id}>
                    {product.tittle} - ${product.price}
                     <img src={product.image} alt={product.title} width="100" height="100" />
                </li>
                // <li>
                //     <img src={product.image} alt={product.title} width="100" height="100" />
                // </li>

                ))}
            </ul>
        </div>
    );
};

export default Products;