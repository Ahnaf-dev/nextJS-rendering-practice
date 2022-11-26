import React from "react";
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

export async function getServerSideProps() {
  return {
    props: {
      users: await fetchUsers(),
    },
  };
}

const SSRPage = ({ users }: props) => {
  if (users.length === 0) {
    return <h1 className="center">Loading...</h1>;
  }
  return (
    <>
      <Header />
      <main>
        <h1 className="center">Server Side Rendering</h1>
        <div className="users__container">
          {users.map((user: any, i: number) => (
            <Users key={i} users={user} />
          ))}
        </div>
      </main>
    </>
  );
};

export default SSRPage;
