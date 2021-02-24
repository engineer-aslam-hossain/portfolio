import React from "react";
import { CardDeck } from "react-bootstrap";
import fakeBlogs from "../../fakeData/fakeBlogs";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./Blog.css";
const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="blogHead d-flex flex-column align-items-center mb-5">
          <h3>Some Of my Article</h3>
          <p>
            Though I'm a learner, sometimes I try to write something that I know
            better.
          </p>
        </div>
        <CardDeck>
          {fakeBlogs.map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </CardDeck>
        <div className="d-flex justify-content-center mt-5">
          <a
            className="allArticle"
            href="https://aslamhossain-dev.medium.com/"
            target="_blank"
          >
            All My Article
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
