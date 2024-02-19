import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import BookCard from "../BookCard/BookCard";
import LoadButton from "../LoadButton/LoadButton";
import useGoogleBookApi from "../API/useGoogleBookApi";
import "./BookList.css";
import "../styles/Loader.css";

const BookList = ({ search, category, sorting }) => {
    const [startId, setStartId] = useState(0);

    const { books, initialTotalItems, loading } = useGoogleBookApi(
        search,
        category,
        sorting,
        startId
    );

    const handleLoadMore = () => {
        setStartId((prevStartIndex) => prevStartIndex + 30);
    };

    return (
        <div>
            {loading ? (
                <div className="circularProgressContainer">
                    <CircularProgress variant="indeterminate" size={200} />
                </div>
            ) : (
                <>
                    <p className="result">Found {initialTotalItems} books</p>
                    <div className="book_list">
                        {books.map((book) => (
                            <BookCard
                                key={book.id}
                                id={book.id}
                                img={
                                    book.volumeInfo.imageLinks?.thumbnail ||
                                    "https://via.placeholder.com/180x250/566273/FFFFFF?text=no%20image"
                                }
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                category={book.volumeInfo.categories}
                            />
                        ))}
                    </div>
                    {books.length > 0 && initialTotalItems > 30 && (
                        <LoadButton onClick={handleLoadMore} />
                    )}
                </>
            )}
        </div>
    );
};

export default BookList;
