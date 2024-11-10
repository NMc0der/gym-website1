import "./blog.scss";
import BlogList from "@/app/data/blogList";
import BlogPost from "@/app/components/BlogPost";

const Blog = () => {
  return (
    <div className="blog-page-container">
      <div className="blog-page">
        <div className="blog-container"></div>
        <div className="blog-find-container"></div>
      </div>
    </div>
  );
};

export default Blog;
