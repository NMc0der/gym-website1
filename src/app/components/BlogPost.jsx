import { RiStackFill } from "react-icons/ri";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";

const BlogPost = (props) => {
  return (
    <div className="blog-post-container">
      <div>
        <Image alt={props.title} src={props.image} />
      </div>
      <div className="blog-info-container">
        <span className="author-icon">
          <RiStackFill />
        </span>{" "}
        By {props.author} | {props.date} | {props.category}
      </div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <div className="blog-view-button">
        <Link href="/signUp">
          <Button text={"Read Now"} />
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
