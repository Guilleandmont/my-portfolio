import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Layout from "../components/Layout/Layout";
import Social from "../components/Social/Social";

export default function Home() {
  return (
    <Layout>
      <header className="flex flex-col items-start w-full md:flex-row md:items-center md:justify-between">
        <div className="w-10 h-10 bg-red-800 rounded-full my-2"></div>
        <Nav />
      </header>
      <main>
        <Social />
        <p className="text-xl text-bold text-indigo-500 mb-2">
          Hi, I'm Guillermo
        </p>
        <p className="mb-8">Scientist and full-stack developer</p>
        <h1 className="text-3xl md:text-6xl font-bold">
          Let's make the web more awesome!
        </h1>
      </main>
    </Layout>
  );
}
