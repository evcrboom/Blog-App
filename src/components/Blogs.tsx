import React, { useEffect, useState } from "react";
import blogs from "../data/blogs";
import "./Blogs.css";
import { Link } from "react-router-dom";
import Blog from "../models/Blog";

function Blogs() {
  const [search, setSearch] = useState("");
  const [filterBlog, setFilterBlog] = useState<Blog[]>([])
  useEffect(() => {
    //กรองข้อมูลบทความ
    const result = blogs.filter((blog) => blog.title?.toLowerCase().includes(search));
    setFilterBlog(result)
  }, [search]);
  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    setSearch(value);
  }
  return (
    <div className="blogs-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="ค้นหาบทความ"
          value={search}
          onChange={handleInput}
        />
      </div>
      <article>
        {filterBlog.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <div className="card">
              <h2>{blog.title}</h2>
              <p>{blog.content!.substring(0, 300)}</p>
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
}

export default Blogs;
