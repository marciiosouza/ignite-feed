import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
export function Post({ author, publishedAt }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="29 de Agosto de 2024" dateTime="2024-08-29 17:28:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifa. É um</p>
        projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
        DoctorCare 🚀
        <a href="#">
          <p>jane.design/doctorcare </p>
        </a>
        <p>
          <a href="">#novoprojeto </a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
