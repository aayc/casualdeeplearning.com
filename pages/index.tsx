import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Casual Deep Learning 😎</title>
        <meta name="description" content="Learn Deep Learning Simply" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar></NavBar>

      <div className="mt-24">
        <h1 className="text-5xl">Read about Deep Learning in simple terms.</h1>

        {/*<code className={styles.code}>pages/index.tsx</code>*/}
        <div className="text-xl mt-4">
          <p>Concepts explained in three levels of complexity.</p>
          <p className="my-2">Every article for free.</p>
        </div>

        <hr className="my-8"></hr>

        <div className="text-center text-3xl mt-8">Get started by topic</div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Natural Language Processing (NLP)</h2>
            <ul>
              <li>
                <p className="text-blue-400">Tokenization &rarr;</p>
              </li>
            </ul>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter, content: pageContent } =
      matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};

export default Home;
