import {useEffect, useState} from "react";
import {fetchNews} from "../http/courseApi";
import { styled } from '@mui/material/styles';

const Span = styled('span')({
    fontSize: '20px',
    fontFamily: 'Montserrat',
    display: 'block',
    fontWeight: 'bold',
})
const Description = styled('p')({
    fontSize: '14px',
    fontFamily: 'Montserrat',
    display: 'block',
    margin: 0
})

const Subtitle = styled('p')({
    fontSize: '16px',
    fontFamily: 'Montserrat',
    fontWeight: 'lighter',
    wordBreak: 'break-all'
})
const Hr = styled('hr')({
    border: '1px solid grey'
})
const News = () => {
    const [news, setNews] = useState([])
    useEffect(async ()=>{
        const data = await fetchNews()
        setNews(data)
    }, [])
    console.log(news)
    return(
        <div>
            {news.length && news.map((news, idx)=>(
                <div key={news.id}>
                    <div>
                        <Span>
                            {news.title}
                        </Span>
                        <Description>
                            {news.description}
                        </Description>
                    </div>
                    <div>
                        <Subtitle>
                            {news.text}
                        </Subtitle>
                    </div>
                    <Hr/>
                </div>
            ))}
        </div>
    )
}

export default News