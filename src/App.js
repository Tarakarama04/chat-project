import React from "react";
import { useEffect, useState } from "react";
import ChatList from "./ChatList";
import ChatSpace from "./ChatSpace";
import "./App.css";
function App() {
  const [data, setData] = useState([]);
  const [user,setUser] = useState()
  const [loading, setLoading] = useState(false);

  const Members = async () => {
    setLoading(true);
    await fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((response) => setData(response.users));
    setLoading(false);
  };
  useEffect(() => {
    Members();
  }, []);

  const captureUserData = (d) => {
    data.filter((user) => {
      if (user.id === d.id) {
        setUser(user)
      }
      return user
    });
  };

  console.log(data);
  return (
    <div className="App">
      <div className="part1">
        <ChatList data={data} loading={loading} captureUserData={captureUserData} />
      </div>
      <div className="part2">
        <ChatSpace user={user} />
      </div>
    </div>
  );
}

export default App;
