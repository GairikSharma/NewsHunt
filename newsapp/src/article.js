import React, { useEffect, useState } from 'react'
import './article.css'
import Aos from 'aos';
import "aos/dist/aos.css";
function Article() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const [news, setNews] = useState([])
    const fetchData = async () => {
        const data = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-05-30&sortBy=publishedAt&apiKey=2bfd69130b6b4832a4a6a9d7b43fb737')
        const res = await data.json()
        setNews(res.articles)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="article-container">
            {

                news.map((newdata) => {
                    return <div className='card' data-aos="fade-in">

                        <center><img src={newdata.urlToImage} alt='NewsHunt' /></center><br />
                        <h3><span>N</span>ews <span>H</span>unt Presents</h3>
                        <h2>{newdata.title}</h2>
                        <p>{newdata.description}</p><br />
                        <span className='publish'>Published At</span>
                        <h6>{newdata.publishedAt}</h6>
                        <button><a href={newdata.url}>Source</a></button>

                    </div>

                })
            }
        </div>
    )
}

export default Article