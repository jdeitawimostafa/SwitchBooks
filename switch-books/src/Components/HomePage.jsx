/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState, useRef } from "react";
import "../css/homePage.css";
import { TextField, Button, Avatar, Tooltip } from "@mui/material";
import axios from "axios";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BooksSkeleton from "./BooksSkeleton";
const Home = () => {
  // States container
  const [loading, setLoading] = useState(true);
  const [cardStylesStatus, setCardStylesStatus] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [books, setBooks] = useState([]);

  // Refs

  const booksRef = useRef();

  // Functionality

  // Handle get books on initial rendering

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=all`)
      .then((res) => {
        setBooks(res.data.items);
        setLoading(false);
      });
  }, []);

  // Handle Search for a book

  const handleBookSearch = () => {
    setLoading(true);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((res) => {
        setBooks(res.data.items);
        setLoading(false);
      });
    booksRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle Sort books

  const handleSort = (sortType) => {
    let tempBooks = [...books];
    if (sortType === 1) {
      tempBooks.sort((a, b) => {
        if (a.volumeInfo?.title || b.volumeInfo.title) {
          return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
        }
      });
    } else {
      tempBooks.sort((a, b) => {
        if (a.volumeInfo?.authors?.length && b.volumeInfo?.authors?.length) {
          return b.volumeInfo.authors[0].localeCompare(a.volumeInfo.authors[0]);
        }
      });
    }
    setBooks(tempBooks);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-content">
          <div className="text-with-form">
            <p className="title-form">{`New & Trending`}</p>
            <p className="quote-form">
              Reqular reading allows you to better formulate your own thoughts .
              Our SwitchBooks website will alawys help you make up your mind and
              find a book .{" "}
            </p>
            <div className="search-box-with-btn">
              <TextField
                className="search-field"
                label="Search"
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Titles , author , or topics"
                variant="outlined"
                InputProps={{
                  startAdornment: <SearchOutlinedIcon />,
                }}
              />
              <Button onClick={() => handleBookSearch()} className="search-btn">
                Search now
              </Button>
            </div>
          </div>
          <div className="form-images">
            <img
              src="/images/book1-bg.png"
              alt="imag2"
              className="first-image"
            />
            <img
              src="/images/book-2.png"
              alt="image2"
              className="second-image"
            />
            <img src="/images/book3.png" alt="image3" className="third-image" />
          </div>
        </div>
      </div>
      <div ref={booksRef} className="books-container">
        <div className="sorting-btns">
          <Button onClick={() => handleSort(1)} className="search-btn">
            Sort by title
          </Button>
          <Button onClick={() => handleSort(2)} className="search-btn">
            Sort by author
          </Button>
        </div>
        <div  className="books">
          {!loading ? (
            books?.length ? (
              books.map((item, index) => {
                return (
                  <div
                    className="card-container"
                    key={item.id}
                    style={{ zIndex: cardStylesStatus === item.id ? "5" : "1" }}
                  >
                    <div
                      className="card"
                      style={
                        cardStylesStatus === item.id
                          ? {
                              maxHeight: "800px",
                              transition: "max-height 2s ease-in-out",
                              boxShadow:
                                "0px 0px 30px -3px rgba(0, 0, 0, 0.25)",
                            }
                          : {}
                      }
                      onMouseEnter={(e) => {
                        setCardStylesStatus(item.id);
                      }}
                      onMouseLeave={(e) => {
                        setCardStylesStatus(null);
                      }}
                    >
                      <div className="topViewCard">
                        <a
                          href={item.volumeInfo?.previewLink ?? "#"}
                          target="_blank"
                        >
                          <Avatar
                            className="cardImg"
                            variant="square"
                            style={{ cursor: "pointer" }}
                            src={item.volumeInfo?.imageLinks?.thumbnail ?? ""}
                          ></Avatar>
                        </a>
                        <Tooltip title={item.volumeInfo?.title ?? " No title"}>
                          <p className="book-title">
                            {item.volumeInfo?.title ?? " No title"}
                          </p>
                        </Tooltip>
                        <div className="cards-body">
                          <p>Country : {item.accessInfo?.country ?? ""}</p>
                          <p className="publishDate">
                            Publish date :{" "}
                            {item.volumeInfo?.publishedDate ?? "No date"}
                          </p>
                          <p>
                            language :{" "}
                            {item.volumeInfo?.language ?? " No language"}
                          </p>
                          <Tooltip
                            title={
                              item.volumeInfo?.authors?.length
                                ? item.volumeInfo?.authors[0]
                                : " No author"
                            }
                          >
                            <p className="author-title">
                              Author :{" "}
                              {item.volumeInfo?.authors?.length
                                ? item.volumeInfo?.authors[0]
                                : " No author"}
                            </p>
                          </Tooltip>
                        </div>
                      </div>
                      <div className="bottomViewCard">
                        <div className="cards-button">
                          <Button
                            onClick={(e) =>
                              window.open(
                                `${item.volumeInfo?.previewLink ?? "#"}`
                              )
                            }
                            variant="contained"
                          >
                            View book
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No results found</p>
            )
          ) : (
            <BooksSkeleton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
