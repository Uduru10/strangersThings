import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { createPost } from "../api/Posts";

import useAuth from "../hooks/useAuth";

export default function AddNewPost() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createPost(
            title,
            description,
            price,
            location,
            token
          );
          navigate("/");
        }}
      >
        <h3>Create New Post!</h3>
        <div>
          <label>Title: </label>
          <input
            value={title}
            type="text"
            placeholder="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label>info: </label>
          <input
            value={description}
            type="text"
            placeholder="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <label>location: </label>
          <input
            value={location}
            type="text"
            placeholder="location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <label>Price: </label>
          <input
            value={price}
            type="text"
            placeholder="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
