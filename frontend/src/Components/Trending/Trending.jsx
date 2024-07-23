import React, { useState } from 'react';
import './Trending.css';
import data_product from '../Assets/data';
import Knife from '../Knife/Knife';

const ITEMS_PER_PAGE = 30;

export const Trending = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const filteredItems = data_product.filter(knife =>
        knife.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const currentItems = filteredItems.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='trending'>
            <input
                type="text"
                placeholder="Search Knives..."
                className="search-bar"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <h1>Trending Knives</h1>
            <div className='trending-items'>
                {currentItems.map((knife, index) => (
                    <Knife key={index} id={knife.id} name={knife.name} image={knife.image} knife_price={knife.knife_price} />
                ))}
            </div>
            <div className='pagination'>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default Trending;

