import React, {useEffect, useState} from 'react';
import NewsCard from "../NewsCard/NewsCard";
import {Container, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

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
        const newsData = await fetch(
            'https://newsapi.org/v2/everything?q=apple&from=2022-05-28&to=2022-05-28&sortBy=popularity&apiKey=399e5248fc374247a07e034081b4130a'
        )
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
