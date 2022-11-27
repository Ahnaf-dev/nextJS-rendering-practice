import React, { useState } from "react";
import Header from "../components/header";
import Users from "../components/users";
import fetchUsers from "../api/todoApi";
import Head from "next/head";
import Footer from "../components/footer";

interface props {
  users: {
    name: string;
    phone: string;
    email: string;
  }[];
}

export async function getServerSideProps() {
  return {
    props: {
      users: await fetchUsers(),
    },
  };
}

const SSRPage = ({ users }: props) => {
  const [userList, setUserList] = useState(users);
  // page renders fully for SEO, use the state from the props given by getServerSideProps for load more functionality

  if (userList.length === 0) {
    return <h1 className="center">Loading...</h1>;
  }

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Server Side Rendering With NextJS - Example Page"
        />

        <title>Server Side Rendering Page Example</title>
      </Head>
      <Header />
      <main>
        <h1 className="center">Server Side Rendering</h1>
        <div className="users__container">
          {userList.map((user: any, i: number) => (
            <Users key={i} users={user} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SSRPage;
