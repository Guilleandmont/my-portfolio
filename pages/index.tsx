import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <header className="flex flex-col items-start w-full md:flex-row items-center justify-between">
        <div className="w-10 h-10 bg-red-800 rounded-full my-2"></div>
        <Nav />
      </header>
      <p className="text-red-200 text-xl">Welcome to my future portfolio</p>
    </Layout>
  );
}
