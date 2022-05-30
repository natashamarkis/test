import React, {useRef, useState} from 'react';
import {Alert, AlertTitle, Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    form: {
        display: "flex",
        flexDirection: "column",
        height: "15vh",
        justifyContent: 'space-between',
        alignItems: "center",
        width: "100%",
        marginBottom: "40px"
    },
    formItem: {
        width: "50%",
        display: "block",
        marginBottom: "20px",
        fontSize: "20px",
        borderRadius: "4px",
    },
}))

function Login() {
    const classes = useStyles()
    const navigate = useNavigate()
    const username = useRef()
    const password = useRef()

    const [toggle, setToggle] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        const mockedUser = JSON.parse(localStorage.getItem('user'))
        if(username?.current.value === mockedUser.username && password?.current.value === mockedUser.password){
            localStorage.isLogin = true
            navigate('/profile')
        } else {
            setToggle(true)
            setTimeout(() => {
                setToggle(false)
            }, 3000)
        }
    }

    return (
        <div>
            <div
            >
                <Container
                    maxWidth="sm"
                    onClick={(event) => event.stopPropagation()}
                >
                    <Typography variant="h2" gutterBottom component="h2" sx={{my: 7, mx: "auto", textAlign: "center"}}>
                        Вход
                    </Typography>
                    <form className={classes.form}>
                        <input type="text" placeholder="username" className={classes.formItem} ref={username}/>
                        <input type="password" placeholder="password" className={classes.formItem} ref={password}/>
                        <div>
                            <Button sx={{width: "150px"}} variant="contained" type="submit" onClick={handleLogin}>Войти</Button>
                        </div>
                    </form>
                    {toggle && <Alert severity="error">Имя пользователя или пароль введены не верно</Alert>}
                </Container>
            </div>
        </div>
    );
}

export default Login;
