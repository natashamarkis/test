import React from 'react';
import {Box, Container, Grid, Link} from '@mui/material';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({

}))

function Footer(props) {

    const classes = useStyles()
    return (
        <footer >
            <Box
                px={{ xs: 3, sm: 3 }}
                py={{ xs: 2, sm: 2 }}
                bgcolor="#012e6c"
                color="white"
            >
                <Container maxWidth="lg">
                    <Box  textAlign="center" pt={{ xs: 2, sm: 2 }} pb={{ xs: "10px", sm: "10px" }}>
                        Наталья Маркина &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;
