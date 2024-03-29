import React from "react";

import BookDetail from "components/BookDetail/BookDetail";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import Header from "components/Header/Header";

import "styles/Layout.css";

const Book = () => {
    return (
        <>
            <div className="header_detail">
                <Header />
            </div>
            <ErrorBoundary>
                <BookDetail />
            </ErrorBoundary>
        </>
    );
};

export default Book;
