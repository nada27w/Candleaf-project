import { useState } from "react";

const profile = () => {
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  const handleLogIn = () => {
    setLoggedIn(name);
    setName("")
  };
  return (
    <div className="d-flex flex-column gap-3 p-4 justify-content-center align-items-center w-100">
      <h1>Profile Page</h1>
      <p>
        This is your profile page. Here you can see your personal information
        and order history.
      </p>
      <div className="d-flex flex-column justify-content-center align-items-center gap-2 w-100">
      {loggedIn && <h2>Welcome, {loggedIn}</h2>}
      <p>Type Your Name</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="w-25 border rounded"
      />
      <button type="button" class="btn btn-success" onClick={handleLogIn}>Save</button>
      </div>
    </div>
  );
};

export default profile;
