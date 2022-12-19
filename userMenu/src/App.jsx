import React, { useState } from "react";
import Header from "./Header";

import { userContext } from "./context";

const App = () => {
  const [user, setUser] = useState({
    name: "Nikola Tesla",
    avatar_url: "https://avatars3.githubusercontent.com/u10001",
  });
  return (
    <userContext.Provider value={user}>
      <div className="page">
        <Header />
      </div>
    </userContext.Provider>
  );
};

export default App;
