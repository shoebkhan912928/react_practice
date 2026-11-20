import react, { useState, useEffect, useMemo } from 'react';
function Usememo_filtering({ products }) {
    const [query, setQuery] = useState("");
    const filteredProducts = useMemo(() => {
        return products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
    }, [products, query]);
    return (
        <>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." />

            {filteredProducts.map(product => (
                <p key={product.id}>{product.name}</p>
            ))}

        </>
    )


}
export default Usememo_filtering;

