import PostCard from "../PostCard/PostCard";
import styles from "./PostList.module.css";
const PostList = () => {
  const posts = [
    {
      id: 1,
      title: "JavaScript",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "HTML",
      content:
        "Eveniet provident explicabo, soluta beatae consequatur cumque maxime debitis pariatur officiis tempora",
    },
    {
      id: 3,
      title: "CSS",
      content:
        "nam laboriosam optio quasi, repellat suscipit, necessitatibus quis. Temporibus, totam!",
    },
  ];

  return (
    <div className={styles.postList}>
      {posts.map((post) => {
        return (
          <PostCard key={post.id} title={post.title} content={post.content} />
        );
      })}
    </div>
  );
};

export default PostList;
