//Instruments
import './App.module.css';
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter, Routes, Route} from "react-router-dom";


//Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainPage from "../MainPage/MainPage";
import News from "../News/News";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import {useEffect} from "react";


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
        localStorage.setItem('user', JSON.stringify({
            username: "Admin",
            password: "12345",
        } ))
    }, [])


  return (
<>

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

</>

  );
}

export default App;
