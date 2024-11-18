import Image from "next/image";

const RecentBlogPost = (props) => {
  return (
    <div className="recent-blog-post">
      <div className="recent-blog-image">
        <Image alt={props.title} src={props.image} />
      </div>
      <div className="recent-blog-info">
        <p>{props.date}</p>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default RecentBlogPost;
