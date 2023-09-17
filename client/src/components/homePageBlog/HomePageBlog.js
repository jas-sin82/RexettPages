import React, { useState, useEffect } from "react";
import classes from "./HomePageBlog.module.css";
import { blogArticles } from "../blogActions/SingleBlog";
import { Link } from "react-router-dom";

const HomePageBlog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const data = await blogArticles();
        setArticles(data);
        setloading(false);
      } catch (e) {
        console.log(e);
      }
    }

    getData();
  }, []);

  return (
    <>
      <div className={classes.ChooseSection}>
        <div className={classes.chooseHeading}>
          <h1>
            <span>U</span>seful articles & Post from Rexett Team.
          </h1>
        </div>
        {loading && (
          <p className={classes.dataLoading}>data is loading from server....</p>
        )}
        {articles && (
          <div className={classes.cards}>
            {articles.map((article) => (
              <div key={article._id} className={classes.cardSection}>
                <div>{article.postTitle}</div>
                <h1>{article.title}</h1>
                <h2>{article.subTitleA}</h2>
                <span></span>
                <p>
                  {article.descriptionA.slice(0, 241)}
                  <Link to={`/blog/${article._id}`}>Read more</Link>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePageBlog;
