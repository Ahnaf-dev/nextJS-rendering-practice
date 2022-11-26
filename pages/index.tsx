import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Users from "../components/users";
import fetchUsers from "../api/todoApi";

interface props {
  users: {
    name: string;
    phone: string;
    email: string;
  }[];
}

export async function getStaticProps() {
  return {
    props: {
      users: await fetchUsers(),
    },
  };
}

export default function Home({ users }: props) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Static Site Generation With NextJS - Example Page"
        />

        <title>Static Site Generation Page Example</title>
      </Head>
      <Header />
      <main>
        <h1 className="center">Static Site Generation</h1>
        <div className="users__container">
          {users.map((user: any, i: number) => (
            <Users key={i} users={user} />
          ))}
        </div>
      </main>
    </>
  );
}
