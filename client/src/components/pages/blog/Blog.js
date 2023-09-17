import React, { useEffect, useState } from "react";
import Navigation from "../../navigation/Navigation";
import classes from "../about/About.module.css";
import SocialIcon from "../../navigation/SocialIcon";
import ContactForm from "../../contactForm/ContactForm";
import Footer from "../../Footer/Footer";
import Subscription from "../../Subscription/Subscription";
import { useLocation } from "react-router-dom";
import AddBox from "../../AddBox/AddBox";
import Questions from "../../frequentlyQuestions/Questions";
import Classes from "./Blog.module.css";
import { Link } from "react-router-dom";
import { blogArticles } from "../../blogActions/SingleBlog";
import ScrollUp from "../../scrollUpWindow/ScrollUp";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);

  const { pathName } = useLocation();
  console.log(articles);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  // const blogArticles = useCallback(async () => {
  //   await axios
  //     .get("/blogPost")
  //     .then((posts) => {
  //       setArticles(posts.data);
  //       console.log(posts.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

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
      <main>
        <Navigation />
        <ScrollUp />
        <div className={classes.heroImageHead}>
          <div className={classes.heroImage}>
            <SocialIcon />
            <div className={classes.heroText}>
              <h1>Our Blog </h1>
              <p>
                Rexett is a Sweden-based boutique, we are startup software
                development company that offers technical solutions for
                real-world business problems.
              </p>
            </div>
          </div>
        </div>
        <div className={Classes.ChooseSection}>
          <div className={Classes.chooseHeading}>
            <h1>
              <span>U</span>seful articles, updates, and guide boon from Rexett
              Team.
            </h1>
          </div>
          {loading && (
            <p className={Classes.dataLoading}>
              data is loading from server....
            </p>
          )}
          {articles && (
            <div className={Classes.cards}>
              {articles.map((article) => (
                <div key={article._id} className={Classes.cardSection}>
                  <div>{article.postTitle}</div>
                  <h1>{article.title}</h1>
                  <h2>{article.subTitleA}</h2>
                  <span></span>
                  <p>
                    {article.descriptionA.slice(0, 241)}
                    <Link to={`/blog/${article._id}`}>Read more</Link>
                  </p>
                  <div className={Classes.authorName}>
                    <p>
                      <span>author:- </span>
                      {article.author}
                    </p>
                    <p>Posted on:- {article.date}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <AddBox />
        <div className={Classes.frequent}>
          <Questions />
        </div>
        <div className={classes.contactForm}>
          <ContactForm />
        </div>
        <Subscription />
        <Footer />
      </main>
    </>
  );
};
export default Blog;
