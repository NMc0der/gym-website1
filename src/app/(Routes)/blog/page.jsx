import "./blog.scss";
import BlogList from "@/app/data/blogList";
import BlogPost from "@/app/components/BlogPost";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import RecentBlogPost from "@/app/components/recentBlogPost";

const Blog = () => {
  const recentPosts = BlogList.slice();

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
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="Search..."
              />
              <button type="submit" className="searchButton">
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
          <div className="recent-blog-post-container">
            <h2 className="recent-blog-post-title">Recent Posts</h2>
            {recentPosts.map((blog) => {
              return <RecentBlogPost key={blog.title} {...blog} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
