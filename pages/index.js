import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className="text-3xl font-bold underline decoration-sky-500">
        About me
      </h1>
      <section>
        <p>Hi, my name is Pai. I am a student at University of Sydney.</p>
      </section>
      <section className='prose'>
        <h2>Projects</h2>
        <ul>
            <li key={`SellPhone`}>
              <a href={`https://pai-sellphone.com/`}  className="underline decoration-sky-500 hover:text-sky-500">
                SellPhone
              </a>
              <br />
            </li>
            <li key={`V-Gifts`}>
              <a href={`http://v-gifts.herokuapp.com/`}  className="underline decoration-sky-500 hover:text-sky-500">
                V-Gifts
              </a>
              <br />
            </li>
        </ul>
      </section>
    </Layout>
  );
}
