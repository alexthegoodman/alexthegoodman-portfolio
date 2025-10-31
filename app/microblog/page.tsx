import Link from "next/link";
import { microblogs } from "./data";

import styles from "./page.module.scss";

export default function Microblog() {
  return (
    <>
      <section className={styles.blog}>
        <h1>Welcome to my Microblog!</h1>
        <div className={styles.blogGrid}>
          {microblogs
            .reverse()
            // .slice(0, 10) // later?
            .map((blog) => {
              return (
                <div key={blog.slug}>
                  <span>{blog.title}</span>
                  <p>{blog.content.substring(0, 40)}...</p>
                  <Link href={"/microblog/" + blog.slug}>Read Post</Link>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
