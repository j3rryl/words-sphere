import Header from "../components/Header"
export default function Home() {
  return (
    <div className="flex ">
      <div className="header w-1/4 h-screen">
      <Header /> 
      </div>
           
      <div className="content !w-3/4 px-10">
        <article>
          <h1>Title One</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam libero saepe, labore praesentium sunt quod culpa sapiente nisi at, delectus tenetur obcaecati ullam cumque quos. 
          Repudiandae quo commodi laboriosam cumque.
        </p>
        </article>
        
      </div>
    </div>
  )
}