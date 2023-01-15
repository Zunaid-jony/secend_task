import { Button } from "primereact/button";
import React, { useState } from "react";

const Post = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  //massage dekhabo
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // preventDefault atar kaj hocche j reload hobe
    if (!image) {
      return;
    }
    // a vabe data patha te hoi
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("A added successfully");
          console.log("added successfully");
        }

        // console.log('Success:', data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  return (
    <div>
      <h3>Add A items</h3>
      <form onSubmit={handleSubmit}>
        <div className="w-40 ml-auto mr-auto">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            label="Name"
            type="name"
            required
            onChange={(e) => setName(e.target.value)}
            variant="standard"
          />
        </div>

     
        <br></br>
       

        <div className="w-40 ml-auto mr-auto">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            email
          </label>
          <input
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            label="Email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
          />
        </div>
        <br></br>
       

        <div className="w-40 ml-auto mr-auto">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
             name
          </label>
          <input
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            label="Email"
            accept="image/*"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            variant="standard"
          />
        </div>
        <br></br>
        <Button sx={{ width: "20%", mr: 28 }} variant="contained" type="submit">
          post item
        </Button>
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default Post;
