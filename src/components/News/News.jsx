import React, {useEffect, useState} from 'react';
import NewsCard from "../NewsCard/NewsCard";
import {Container, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {newsLink} from "../../common/const"

const useStyles = makeStyles(() => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        width: "90vw",
    }
}))

function News() {
    const classes = useStyles()

    const [data, setData] = useState()

    useEffect(() => {
    const fetchData = async () => {
        const newsData = await fetch(newsLink)
        const newsItems = await newsData.json()
        setData(newsItems.articles)
    };
    fetchData()
    }, [])

    return (
        <div>
            <Typography
                component="h4"
                variant="h2"
                sx={{textAlign: "center", marginBottom: "30px", marginTop: "30px"}}
            >
                Новости
            </Typography>
            <Container className={classes.wrapper}>
                {data ? data.map(data => <NewsCard key={data?.publishedAt} data={data} />) : <div>Загрузка...</div>}
            </Container>
        </div>
    );
}

export default News;
