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
      </main>
    </Layout>
  );
}
