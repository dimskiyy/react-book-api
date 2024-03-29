import React, { memo, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { coverNoImage } from "constants/BookCovers";
import useGoogleBookAPI from "hooks/useGoogleBookAPI";

import BookCard from "components/BookCard/BookCard";
import LoadButton from "components/LoadButton/LoadButton";

import "styles/Loader.css";
import "./BookList.css";

const BookList = memo(function BookList({ search, category, sorting }) {
    const [startId, setStartId] = useState(0);

    const { books, initialTotalItems, loading } = useGoogleBookAPI(
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
                                    coverNoImage
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
});

export default BookList;
