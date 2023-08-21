import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    async function navigateLogin() {
      if (!localStorage.getItem("chat-app-user")) {
        navigate("/login");
      }
      else {
        setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
      }
    }
    navigateLogin();
  }, []);

  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Home
