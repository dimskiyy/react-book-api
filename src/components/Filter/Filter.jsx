import "./Filter.css";

import React, { useState } from "react";

import { categories, sortingOptions } from "../../Constants/Categories";
import Select from "../Select/Select";

const Filter = ({
    selectedCategory,
    selectedSorting,
    onCategoryChange,
    onSortingChange
}) => {
    const [category, setCategory] = useState(selectedCategory);
    const [sorting, setSorting] = useState(selectedSorting);

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setCategory(value);
        onCategoryChange(value);
    };

    const handleSortingChange = (e) => {
        const value = e.target.value;
        setSorting(value);
        onSortingChange(value);
    };

    return (
        <div className="filter">
            <Select
                label="Category"
                value={category}
                options={categories}
                onChange={handleCategoryChange}
                id="category"
            />
            <Select
                label="Sort by"
                value={sorting}
                options={sortingOptions}
                onChange={handleSortingChange}
                id="sort"
            />
        </div>
    );
};

export default Filter;
