import React from "react";
import Article from "./Article"; // Ensure the path is correct based on your project structure

function ArticleList(props) {
  return (
    <main>
      {props.posts.map(function(post) {
        return <Article key={post.id} post={post} />;
      })}
    </main>
  );
}

export default ArticleList;
