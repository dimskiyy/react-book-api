import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RoutesConfig } from "constants/Routes";
import { useAppContext } from "hooks/useAppContext";

import BookFavorite from "components/FavoriteToggle/BookFavorite";

import "./BookCard.css";

const BookCard = memo(function BookCard({ id, img, title, authors, category }) {
    const { favorites, addToFavorite, removeToFavorite } = useAppContext();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        setIsFavorite(favorites.some((book) => book.id === id));
    }, [favorites, id]);

    const toggleFavorite = () => {
        if (isFavorite) {
            removeToFavorite(id);
        } else {
            addToFavorite({ id, img, title, authors, category });
        }
        setIsFavorite(!isFavorite);
    };
    return (
        <div className="book_card">
            <Link to={`${RoutesConfig.BOOK_CARD}/${id}`} data-id={id}>
                <img src={img} className="card_img" alt={title} title={title} />
            </Link>
            <BookFavorite
                isFavorite={isFavorite}
                toggleFavorite={toggleFavorite}
            />
            <h6 className="card_category">{category?.[0]}</h6>
            <p className="card_authors">{authors?.join(", ")}</p>
            <h5 className="card_title">{title}</h5>
        </div>
    );
});

export default BookCard;
