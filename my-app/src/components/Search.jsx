import React, { useState } from "react";
export const Search = () => {
    const [search, setSearch] = useState("")
    const product = ["Laptop", "Mobile", "Keyboard", "Mouse", "Monitor"];
    const fileterProduct = product.filter(p => p.toLocaleLowerCase().includes(search.toLocaleLowerCase()));


    return (
        <>
            <input type="text" placeholder="Search product ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}

            />
            {fileterProduct.map((product, index) => (
                <h1 key={index}> {product}</h1>
            )
            )}
        </>
    )
}