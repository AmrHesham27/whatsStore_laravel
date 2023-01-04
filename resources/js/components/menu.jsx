import React, { useEffect, useState } from "react";
import CollapseCategory from "./collapseCategory";
import MenuItem from "./menuItem";

function menu({ products, categories }) {
    const [searchItems, setSearchItems] = useState([]);
    const [userInput, setUserInput] = useState("");

    const search = () => {
        setSearchItems([]);
        console.log(products);
        products.filter((product) => {
            if (product["name"].indexOf(userInput) > -1) {
                setSearchItems((state) => [...state, product]);
            }
        });
    };

    useEffect(() => {
        if (userInput === "") setSearchItems([]);
        else search();
    }, [userInput]);

    return (
        <div className="menu">
            <div className="search-bar">
                <input
                    onChange={(e) => setUserInput(e.target.value)}
                    type="text"
                    placeholder="البحث عن أصناف"
                ></input>
                <div className="d-flex flex-coumn jsutify-content-center">
                    <i
                        style={{
                            color: "rgb(190, 190, 190)",
                            marginLeft: "5px",
                        }}
                        className="fa fa-search"
                        aria-hidden="true"
                    ></i>
                </div>
            </div>
            {searchItems.length
                ? searchItems.map((product, index) => (
                      <MenuItem key={index} product={product} />
                  ))
                : categories.length
                ? categories.map((category, index) => (
                      <CollapseCategory key={index} category={category} />
                  ))
                : undefined}
        </div>
    );
}

export default menu;
