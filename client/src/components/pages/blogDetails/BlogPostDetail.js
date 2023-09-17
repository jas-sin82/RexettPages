import React, { useEffect, useState } from "react";
import Classes from "./BlogPostDetails.module.css";
import { useLocation } from "react-router-dom";
import classes from "../about/About.module.css";
import AddBox from "../../AddBox/AddBox";
import SocialIcon from "../../navigation/SocialIcon";
import Navigation from "../../navigation/Navigation";
import Subscription from "../../Subscription/Subscription";
import Footer from "../../Footer/Footer";
import ContactForm from "../../contactForm/ContactForm";
import Questions from "../../frequentlyQuestions/Questions";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../blogActions/SingleBlog";
import { blogArticles } from "../../blogActions/SingleBlog";
import { Link } from "react-router-dom";
import ScrollUp from "../../scrollUpWindow/ScrollUp";

const BlogPostDetail = () => {
  const [data, setData] = useState({});
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);

  const { pathName } = useLocation();
  const { id } = useParams();
  console.log(getBlogById(id));
  console.log(data);
  useEffect(() => {
    async function getData() {
      try {
        const data = await getBlogById(id);
        setData(data);
        setloading(false);
      } catch (e) {
        console.log(e);
      }
    }

    getData();
  }, [id]);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  useEffect(() => {
    window.scrollTo(0, 300);
  }, [id]);

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
        {loading && (
          <p className={Classes.dataLoading}>data is loading from server....</p>
        )}
        {data && (
          <div className={Classes.ChooseSection}>
            <div className={Classes.chooseHeading}>
              <p>
                <span>author:- </span>
                {data.author}
              </p>
              <p>Posted on:-{data.date}</p>
              <h1>{data.title}</h1>
            </div>
            <div className={Classes.detail}>
              <h4>{data.subTitleA}</h4>
              <p>{data.descriptionA}</p>
              <h4>{data.subTitleB}</h4>
              <p>{data.descriptionB}</p>
              <h4>{data.subTitleC}</h4>
              <p>{data.descriptionC}</p>
              <h4>{data.subTitleD}</h4>
              <p>{data.descriptionD}</p>
              <h4>{data.subTitleE}</h4>
              <p>{data.descriptionE}</p>
              <h4>{data.subTitleF}</h4>
              <p>{data.descriptionF}</p>
              <h4>{data.subTitleG}</h4>
              <p>{data.descriptionG}</p>
              <h4>{data.subTitleH}</h4>
              <p>{data.descriptionH}</p>
            </div>
            <div className={Classes.rightSidePost}>
              <h2>Recent Posts</h2>
              {articles.map((article) => (
                <div key={article._id} className={Classes.rightSidePostLinks}>
                  <div className={Classes.postTitle}>{article.postTitle}</div>
                  <h3>
                    <Link to={`/blog/${article._id}`}>{article.title}</Link>
                  </h3>
                  <p className={Classes.subTitle}>{article.subTitleA}</p>
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
          </div>
        )}
        <AddBox />
        <Questions />
        <div className={classes.contactForm}>
          <ContactForm />
        </div>
        <Subscription />
        <Footer />
      </main>
    </>
  );
};

export default BlogPostDetail;
