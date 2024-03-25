import React from "react";

const Blog = ({ blog }) => {
  const {bookName,author,image,review,totalPages,raitng,cetegory,tags,publisher,yearOfPublishing} = blog;
  return (
    <article className="flex flex-col bg-white">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label={bookName}
      >
        <img
          alt=""
          className="object-contain w-full h-52"
          src={image}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label={bookName}
        ></a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracking-wider uppercase hover:underline text-violet-400"
        >
          {
          tags.map((tag,idx)=> <span className="mr-4" key={idx}>{tag}</span>)
          }
        </a>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          {bookName}
        </h3>
        <p>By : {author}</p>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
          <span>June 1, 2020</span>
          <span>2.1K views</span>
        </div>
      </div>
    </article>
  );
};

export default Blog;
