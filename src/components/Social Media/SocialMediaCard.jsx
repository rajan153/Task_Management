import React from "react";

function SocialMediaCard({ post }) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl border m-8">
      <figure className="px-10 pt-10">
        <img src={post?.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <p>{post?.caption}</p>
      </div>
    </div>
  );
}

export default SocialMediaCard;
