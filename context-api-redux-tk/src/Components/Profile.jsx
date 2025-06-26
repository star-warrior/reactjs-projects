import React, { useContext } from "react";
import userContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(userContext);
  return (
    <div>
      <h2 className="text-2xl text-blue-500">Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
}

export default Profile;
