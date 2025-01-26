import React, { useEffect, useState } from "react";
import Login from "../components/Auth/Login";
import SocialMediaCard from "../components/Social Media/SocialMediaCard";
import { creatingPost, fetchPost } from "../service/operations/socialApi";

function SocialMediaSystem() {
  const token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);
  const [postImage, setPostImage] = useState(null);
  const [caption, setCaption] = useState("");

  if (!token) {
    <Login />;
  }

  const fetchPosts = async () => {
    const response = await fetchPost(token);
    setPosts(response.post);
    setCaption("");
    setPostImage("");
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setPostImage(file);
    }
    e.target.value = "";
  };

  const postUploadHandler = async () => {
    const form = new FormData();
    form.append("postImage", postImage);
    form.append("caption", caption);
    await creatingPost(form, token);
    await fetchPosts();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 mt-4 mb-4 justify-center">
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input file-input-bordered file-input-info w-full max-w-xs"
        />
        {postImage && <p>{postImage.name}</p>}
        <textarea
          className="textarea textarea-bordered"
          placeholder="Enter caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>
        <button onClick={postUploadHandler} className="btn btn-info">
          Create Task
        </button>
      </div>
      <div className="grid grid-cols-1 justify-center">
        {posts.map((post) => (
          <SocialMediaCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default SocialMediaSystem;
