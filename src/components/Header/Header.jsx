import React from 'react';
import {AppBar, Toolbar, Button, Container} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    headerItems: {
        display: "flex",
        justifyContent: "space-around"
    }
}))

function Header() {
    const classes = useStyles()

    const navigate = useNavigate()
    const handleMain = () => {
        navigate('/')
    }

    const handleNews = () => {
        navigate('/news')
    }

    const handleProfile = () => {
        if(JSON.parse(localStorage.getItem('isLogin'))){
            navigate('/profile')
        } else {
            navigate('/login')
        }
    }

    return (
            <AppBar style={{zIndex: '100',
                position: 'sticky', backgroundColor: "rgb(1,46,108)"}}>
                <Container maxWidth='lg'>
                    <Toolbar disableGutters className={classes.headerItems}>
                        <Button color="inherit" onClick={handleMain}>На главную</Button>
                        <Button color="inherit" onClick={handleNews}>Новости</Button>
                        <Button color="inherit" onClick={handleProfile}>Профиль</Button>
                    </Toolbar>
                </Container>
            </AppBar>
    );
}

export default Header;
