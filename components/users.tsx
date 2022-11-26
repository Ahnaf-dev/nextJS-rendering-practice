import React from "react";

interface props {
  users: {
    name: string;
    email: string;
    phone: string;
  };
}

const Users = ({ users }: props) => {
  return (
    <div className="users">
      <h2 className="users__name">
        <span className="text-bd">Username: </span> {users.name}
      </h2>
      <h2 className="users__email">
        <span className="text-bd">Email: </span> {users.email}
      </h2>
      <h2 className="users__phone">
        <span className="text-bd">Phone: </span> {users.phone}
      </h2>
    </div>
  );
};

export default Users;
