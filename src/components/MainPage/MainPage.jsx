import React from 'react';
import {Container} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles(() => ({
    wrapper: {
        margin: "0",
        marginTop: "-20px",
        marginBottom: "-50px",
        boxSizing: "border-box",
        padding: "40px",
        backgroundColor: "white"
    },
    item: {
        height: "42vw",
        overflow: "hidden",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
    },
    itemImg: {
        width: "80%",
        margin: "0 auto",
        marginTop: "-5%",
    },
    header: {
        textAlign: "center",
        fontSize: "2rem",
        marginBottom: "10px",
        fontWeight: 700,
        letterSpacing: "1.5px",
    },
    galleryWrapper: {
        paddingTop: "70px"
    }
}));

const images = ['severstal1.png', 'severstal2.png', 'severstal3.png']

function MainPage() {
    const classes = useStyles();

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: false
    };

    return (
        <div id="gallery" className={classes.galleryWrapper}>
            <Container maxWidth="lg">
                <div className={classes.wrapper} >
                    <Slider {...settings}>
                        {images.length > 0 ? images.map(el => (
                            <div key={`${el}`} className={classes.item}>
                                <img className={classes.itemImg} src={`/img/carousel/${el}`} alt="text" />
                            </div>
                        )) : (
                            <div>Нет данных</div>
                        )}
                    </Slider>
                </div>
            </Container>
        </div>
    );
}

export default MainPage;
