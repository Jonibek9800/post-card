import styles from "./PostCard.module.css";

const PostCard = ({ title, content }) => {
  return (
    <div className={styles.postCard}>
      <h1 className={styles.postCardTitle}>{title}</h1>
      <div className={styles.postCardContent}>{content}</div>
    </div>
  );
};

export default PostCard;
