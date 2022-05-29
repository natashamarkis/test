import React from 'react';
import { Paper, Typography} from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    newsCard: {
        marginBottom: "20px",
        padding: "20px"
    },
    newsAuthor: {
        display: "block",
        paddingTop: "20px",
        textAlign: "end",



    }
}))

function NewsCard({data}) {

const classes = useStyles()

    return (
        <Paper elevation={10}
               className={classes.newsCard}
               md={{width: "200px"}}
        >
            <Typography
                component="h4"
                variant="h5"
                sx={{marginBottom: "10px", fontWeight: "bold"}}
            >
                {data.title}
            </Typography>
            <Typography>
                {data.description}
            </Typography>
            <Typography
                className={classes.newsAuthor}
                sx={{fontStyle: "italic"}}
            >
               {data.author}
            </Typography>


        </Paper>
    );
}

export default NewsCard;
