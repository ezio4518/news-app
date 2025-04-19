import { useEffect, useState } from "react"
import Item from "./Item";


const Board = ({category}) => {

    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${import.meta.env.VITE_API_KEY}`;
        // fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles));
        //https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}
        //https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${import.meta.env.VITE_API_KEY}

        async function fetchArticles() {
          try {
            const response = await fetch(url);
            const data = await response.json();
            setArticles(data.articles);
          } catch (error) {
            console.error('Error fetching articles:', error);
          }
        }
        
        fetchArticles();

    },[category])

  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        {articles.map((news,index)=>{
            return <Item key={index} title={news.title} description={news.description} src={news.image} url={news.url}/>
        })}
    </div>
  )
}

export default Board