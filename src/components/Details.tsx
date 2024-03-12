import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs";
import Blog from "../models/Blog";
import "./Details.css";

function Details() {
    const { id } = useParams<string>();
    const [blog, setBlog] = useState<Blog>({});
    useEffect(() => {
        const result = blogs.find((blog) => blog.id === Number(id));
        setBlog(result!);
    }, [id]);

    return (
        <div className="container">
            <h2 className="title">รายละเอียดบทความ : {blog.title}</h2>
            <img src={blog.image_url} alt="imgblog" className="blog-img" />
            <strong>ผู้เขียน : {blog.author}</strong>
            <p className="detail"><strong>เนื้อหาบทความ</strong> : {blog.content}</p>
        </div>
    );
}

export default Details;
