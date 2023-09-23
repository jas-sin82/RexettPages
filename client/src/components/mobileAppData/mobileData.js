import React from "react";
import classes from "./mobileData.module.css";
import ui from "../../images/app-ui-ux.png";
import social from "../../images/app-social.png";
import appDev from "../../images/app-dev.png";
import appGps from "../../images/app-gps.png";
import appPayment from "../../images/app-payment.png";
import appCustom from "../../images/App-coustom.png";

const appData = [
  {
    id: 1,
    number: 1,
    image: ui,
    title: "UI / UX Design App",
    description:
      "UI/UX designs can be the difference between user delight, and user unexpected vision. That's why we have a team of dynamic mobile designers that are seriously picky about pixels. Behind every brilliant mobile app, there's a story about excellent design. How does it look or feel? How do really humans interact with it?",
  },
  {
    id: 2,
    number: "2",
    image: social,
    title: "Email and Social Login System",
    description:
      "So many apps in these days use social login buttons for “Log In with Twitter” or “Log In with Facebook.” These login methods are popular because with millions of users on these massive networks. Many of who log in each day adding social login buttons to your form should dramatically decrease the number of login failures.",
  },
  {
    id: 3,
    number: "3",
    image: appDev,
    title: "API Development and Integration",
    description:
      "There are two divergent trends happening in mobile development right now. The most common one is the mobile-first approach strategy. You construct a landing page website and then build a product in iOS or Android.",
  },
  {
    id: 4,
    number: "4",
    image: appGps,
    title: "GPS and Location Application",
    description:
      "One of the unique features of mobile applications is location awareness. Mobile users take their devices with them everywhere, and adding location awareness to your app offers users a more contextual experience. The location APIs available in Google Play services facilitate adding location awareness to your app with automated location tracking.",
  },
  {
    id: 5,
    number: "5",
    image: appPayment,
    title: "Purchase and Payments Application",
    description:
      "Your application accesses the In-app Billing service using an API that is exposed by the Google Play app that is installed on the device. The Google Play app then conveys billing requests and responses between your application and the Google Play server. In practice, your application never directly communicates with the Google Play server.",
  },
  {
    id: 6,
    number: "6",
    image: appCustom,
    title: "Custom App Development",
    description:
      "Designs and builds engaging consumer-facing applications that enable consumer engagement, customer service, customer onboarding and achievement of goals by Consumer Applications unleashing the full power of mobility for your brand. With expertise that ranges from deploying gamification strategy to building niche communities on mobile that improve your brand engagement.",
  },
];

const AppCard = () => {
  return (
    <>
      <div className={classes.cards}>
        {appData.map((card) => (
          <div key={card.id} className={classes.cardSection}>
            <img src={card.image} alt={card.title} />
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppCard;
