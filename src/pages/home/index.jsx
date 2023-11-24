import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";

const Home = () => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    handleGetMenulist();
  }, []);

  const handleGetMenuList = () => {
    axios
      .get(`https://api.mudoapi.tech/menus`)
      .then((res) => {
        console.log(res);
        setMenuList(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <p>ini page home</p>
    </div>
  );
};

export default Home;
