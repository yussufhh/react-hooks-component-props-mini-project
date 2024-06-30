import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header"
import About from "../components/About";
import ArticleList from "../components/ArticleList"
import Article from "../components/Article";


console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
    <Header name={blogData.name}/>
    <About image={blogData.image} about={blogData.about}/>
    <ArticleList posts={blogData.posts}  />
    <Article title={blogData.title}/>
    </div>
  );
}

export default App;
