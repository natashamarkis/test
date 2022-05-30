//Instruments
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, {useEffect} from "react";
import {createTheme, ThemeProvider} from "@mui/material";

//Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainPage from "../MainPage/MainPage";
import News from "../News/News";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";

//Data
import {user} from "../../common/const"

const theme = createTheme({
  palette: {
    primary: {
      main: "#012e6c",
    },
    secondary: {
      main: "#f0f0f0",
    }
  }
})

function App() {
    useEffect(() => {
        localStorage.setItem('isLogin', JSON.stringify(false))
        localStorage.setItem('user', JSON.stringify(user))
    }, [])

  return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/news' element={<News />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/login' element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
  );
}

export default App;
