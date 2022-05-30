import React from 'react';
import {Container, Typography} from "@mui/material";

function Profile() {
    const user = JSON.parse(localStorage.getItem("user"))

    return (
        <Container>
            <Typography
                component="h4"
                variant="h2"
                sx={{textAlign: "center", marginBottom: "30px", marginTop: "30px"}}
            >
            Hello, {user?.username}
            </Typography>
        </Container>
    );
}

export default Profile;
