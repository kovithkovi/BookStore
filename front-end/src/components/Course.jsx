import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
function Course() {
  const [book, setBoook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBoook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you
          <span className="text-pink-500"> &nbsp;Here :)</span>
        </h1>
        <p className="mt-6">
          Explore a diverse range of free courses designed to elevate your
          skills and knowledge in various fields. From cutting-edge technology
          and creative disciplines to professional development, our carefully
          curated courses offer high-quality content and practical exercises.
          Join us and start mastering new skills with expertly crafted materials
          and engaging lessons, all available at no cost.
        </p>
        <Link to="/">
          <button className="btn btn-outline bg-pink-500 text-white hover:bg-pink-700 mt-7">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 space-x-8">
        {book.map((item) => (
          <Cards item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default Course;
