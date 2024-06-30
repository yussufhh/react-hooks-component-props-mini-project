import React from "react";
import Article from "./Article"; // Ensure the path is correct based on your project structure

function ArticleList({posts}) {
  const lastPost = posts.map( function(post){
    return<Article key={post.id} title={post.title} preview={post.preview} date={post.date}/>
    
  })

return (
  <main>
  {lastPost}
  </main>
)
}

export default ArticleList;
