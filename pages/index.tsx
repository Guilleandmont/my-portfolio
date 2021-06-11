import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav/Nav";
import Layout from "../components/Layout/Layout";
import Social from "../components/Social/Social";

export default function Home() {
  return (
    <Layout>
      <header className=""></header>
      <main>
        <section>
          <h1>Hi, I'm Guillermo</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Full-stack scientist and developer. I love doing things the
            challenging way.
          </p>
        </section>
        <section>
          <h2>About me</h2>
          <p className="mb-24">
            I’m a biology undergraduate student at UCV, Venezuela. When i’m not
            studying, I’m creating things with computers. I love to learn deeply
            about these technologies and creating cool stuff with them.
          </p>
        </section>
        <section>
          <h2>Contact me</h2>
          <p className="mb-24">
            This site is under construction, meanwhile, send me a message
            through one of these!
          </p>
        </section>
      </main>
    </Layout>
  );
}
