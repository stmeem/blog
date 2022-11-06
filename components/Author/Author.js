import React from "react";

const Author = ({ author }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <div className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              alt={author.name}
              height="100px"
              width="100px"
              className="rounded-full"
              src={author.photo.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-ls">{author.name}</p>
            <p className="text-gray-500 text-xs">{author.bio}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Author;
