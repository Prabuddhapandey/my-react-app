import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostsTable = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!loading) return;
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Posts</h2>
        <Link to="/posts/create" className="btn btn-success">
          + Add Post
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>SN</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default PostsTable;
