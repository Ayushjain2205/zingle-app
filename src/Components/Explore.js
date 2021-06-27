import React, { useState } from "react";
import { Link } from "react-router-dom";
import SwipingCard from "./SwipingCard";

function Explore() {
  const initialState = () => "food";
  const [value, setValue] = useState(initialState);
  const cards = {
    food: [
      {
        image:
          "https://b.zmtcdn.com/data/dish_photos/59e/6e3daf9342e3575c58724f250700259e.jpg",
        text: "Burrito",
      },
      {
        image:
          "https://b.zmtcdn.com/data/dish_photos/3cb/b3b50dcafcbd6c1481fc1859018da3cb.jpg?output-format=webp",
        text: "Biryani",
      },
      {
        image:
          "https://b.zmtcdn.com/data/dish_photos/0f1/665b7b4a66f5f63874e486c3d0b8a0f1.jpg?output-format=webp",
        text: "Pasta",
      },
      {
        image:
          "https://b.zmtcdn.com/data/pictures/8/19451868/472a4d80db4e10457de2cd0a3a0afa6b.jpg?fit=around|300:273&crop=300:273;*,*",
        text: "Pizza",
      },
    ],
    movies: [
      {
        image:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
        text: "After",
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/0969/9128/products/MoneyHeist-NetflixTVShowPosterFanArt_67917fbc-de8e-4228-90a4-217503d7bbd4.jpg?v=1589268514",
        text: "Money Heist",
      },
      {
        image: "https://i.redd.it/y0nkw62e6rp11.jpg",
        text: "Riverdale",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcba2LRaxw1izjzqbws4No6ByrVlWydeHwA&usqp=CAU",
        text: "Stranger Things",
      },
    ],
    places: [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3oms8Crq_aH1HYupJzQhtZ7CDHOE-6ALhw&usqp=CAU",
        text: "Maldives",
      },
      {
        image:
          "https://www.topcoursesabroad.com/wp-content/uploads/2018/07/dubai.jpg",
        text: "Dubai",
      },
      {
        image:
          "https://static.toiimg.com/photo/83833604/switzerland-travel-restrictions.jpg?width=748&resize=4",
        text: "Switzerland",
      },
      {
        image: "https://static.toiimg.com/photo/77593217.cms",
        text: "Bali",
      },
    ],
    songs: [
      {
        image:
          "https://m.media-amazon.com/images/M/MV5BY2NlNTZiYWUtYjZjYS00YmZiLTk2OGItODQzNGFhNzlkZTJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjE4MTAxNjU@._V1_.jpg",
        text: "Closer",
      },
      {
        image:
          "https://m.media-amazon.com/images/M/MV5BOTdlMDcyNjktMjk2OC00NzE3LWI5OWMtYTdjZTQzNzJiNWM2XkEyXkFqcGdeQXVyNDE1OTc3MTA@._V1_SY264_CR43,0,178,264_AL_.jpg",
        text: "All we know",
      },
      {
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Music111/v4/a9/93/1e/a9931e9e-6818-a382-a6a9-3e6cd85cffe0/source/600x600bb.jpg",
        text: "Something just like this",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/en/e/e8/Paris_%28Official_Single_Cover%29_by_The_Chainsmokers.png",
        text: "Paris",
      },
    ],
    books: [
      {
        image: "https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY218_.jpg",
        text: "Psychology of money",
      },
      {
        image: "https://m.media-amazon.com/images/I/51oHUvYzbsL._AC_UY218_.jpg",
        text: "Theory of everything",
      },
      {
        image: "https://m.media-amazon.com/images/I/71oc7i5HkCL._AC_UY218_.jpg",
        text: "The silent patient",
      },
      {
        image: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg",
        text: "Ikigai",
      },
    ],
  };

  return (
    <div>
      <h1 className='page-title'>
        Explore {"   "}
        <i class='fas fa-fire'></i>
      </h1>
      <div className='explore-card card border-secondary mb-3'>
        <div className='card-header'>
          <Link to='/matches'>
            <button
              type='button'
              className='match-btn btn btn-lg btn-outline-secondary'
            >
              Match <i class='fas fa-space-shuttle'></i>
            </button>
          </Link>
        </div>
        <div className='card-body'>
          <h4 className='card-title'>Categories :</h4>
          <div className='categories-holder card-text'>
            <span
              className='badge rounded-pill bg-primary'
              onClick={() => setValue("food")}
            >
              Food
            </span>
            <span
              className='badge rounded-pill bg-secondary'
              onClick={() => setValue("movies")}
            >
              Movies & Shows
            </span>
            <span
              className='badge rounded-pill bg-success'
              onClick={() => setValue("places")}
            >
              Places
            </span>
            <span
              className='badge rounded-pill bg-danger'
              onClick={() => setValue("songs")}
            >
              Songs
            </span>
            <span
              className='badge rounded-pill bg-light'
              onClick={() => setValue("books")}
            >
              Books
            </span>
          </div>
          {cards[value].map((card) => (
            <SwipingCard image={card.image} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
