import "./blog.scss";
import BlogList from "@/app/data/blogList";
import BlogPost from "@/app/components/BlogPost";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="blog-page-container">
      <div className="blog-page">
        <div className="blog-container">
          {BlogList.map((blog) => {
            return <BlogPost key={blog.title} {...blog} />;
          })}
        </div>
        <div className="blog-find-container">
          <div className="blog-search-bar">
            <div class="search">
              <input type="text" class="searchTerm" placeholder="Search..." />
              <button type="submit" class="searchButton">
                <FaSearch />
              </button>
            </div>
          </div>
          <h2 className="categories-title">Categories</h2>
          <div className="categories-drop-down">
            <span>
              {" "}
              <IoIosArrowForward />
            </span>
            Body Building
            <span className="blog-count">{"(4)"}</span>
          </div>
          <div className="categories-drop-down">
            <span>
              {" "}
              <IoIosArrowForward />
            </span>
            Yoga
            <span className="blog-count">{"(7)"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
