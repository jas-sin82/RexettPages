import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/pages/contact/Contact";
import Home from "./components/pages/Home/Home";
import AboutUs from "./components/pages/about/About";
import Services from "./components/pages/services/Services";
import Blog from "./components/pages/blog/Blog";
import WebDevelopment from "./components/pages/webdevelopment/WebDevelopment";
import WebDesign from "./components/pages/webDesign/WebDesign";
import Ecommerce from "./components/pages/ecommerce/Ecommerce";
import MobileApp from "./components/pages/mobileApp/MobileApp";
import BlogPostDetail from "./components/pages/blogDetails/BlogPostDetail";
import PolicyRexett from "./components/pages/policy/PolicyRexett";
import CookieConsent from "react-cookie-consent";
import TermCondition from "./components/pages/termsCondition/TermCondition";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <AboutUs /> },
  {
    path: "/service",
    element: <Services />,
    children: [
      { path: "webdevelopment", element: <WebDevelopment /> },
      { path: "webdesign", element: <WebDesign /> },
      { path: "mobileapp", element: <MobileApp /> },
      { path: "ecommerce", element: <Ecommerce /> },
    ],
  },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:id", element: <BlogPostDetail /> },
  { path: "/policy", element: <PolicyRexett /> },
  { path: "/terms-conditions", element: <TermCondition /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        style={{ background: "#141e30" }}
        buttonStyle={{
          color: "#4e503b",
          boderRadius: "5px",
          outline: "none",
          border: "none",
          fontSize: "14px",
          fontWeight: "bold",
          background: "#d6eeee",
          height: "40px",
          marginRight: "10px",
          padding: "12px 32px",
        }}
        expires={365}
        overlay
        declineButtonText="I Decline"
        declineButtonStyle={{
          color: "#4e503b",
          boderRadius: "5px",
          outline: "none",
          border: "none",
          fontSize: "14px",
          fontWeight: "bold",
          background: "#fffc00",
          height: "40px",
          padding: "12px 32px",
        }}
        cookieName="www.rexett.com"
        enableDeclineButton
      >
        <span
          style={{
            fontSize: "13px",
            fontFamily: "Libre Baskerville, serif",
          }}
        >
          We use cookies to ensure that we deliver the best user experience on
          our website. If you continue proceeding the website without changing
          the settings, we assume that you are happy to receive all cookies on
          the Rexett websites. However, you can always change your cookies
          settings at any time.
        </span>{" "}
        <span
          style={{ fontSize: "12px", fontFamily: "Roboto Serif, sans-serif" }}
        >
          <a style={{ color: "blue" }} href="/policy">
            Rexett Privacy & Cookie Policy.
          </a>
        </span>
      </CookieConsent>
    </div>
  );
}

export default App;
