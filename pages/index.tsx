import { InferGetServerSidePropsType } from "next"
import Header from "../components/Header"
import { Article } from "../models/Article"

export default function Home({articles}:InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex ">
      <div className="header w-1/4 h-screen">
      <Header /> 
      </div>
           
      <div className="content !w-3/4 px-10">
        {articles.map((article:Article)=>{
          return(
          <article key={article.id}>
            <h3 className="font-medium text-2xl ml-16">{article.title}</h3>
            <hr className="w-1/2" />
            <p>
              {article.words}
            </p>
            <p className=" text-right">{article.author}</p>
          </article>
          )
        })}
      </div>
    </div>
  )
}
export async function getServerSideProps(){
  const response = await fetch(`http://localhost:5000/articles`)
  const data = await response.json()
  return{
    props:{
      articles:data,
    }
  }
}