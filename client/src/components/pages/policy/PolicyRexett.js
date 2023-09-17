import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import classes from "./PolicyRexett.module.css";
import ScrollUp from "../../scrollUpWindow/ScrollUp";


const PolicyRexett = () => {
  const { pathName } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
  return (
    <>
      <main>
        <ScrollUp />
        <div className={classes.policy}>
        <h1>Privacy Policy</h1>
        <div className={classes.privacyPolicy}>
          <p>
            This privacy notice for Rexett It ("we", "us", or "our"), describe
            how and why we might collect, store ,use, and/or share ("process")
            your information when you use services("service"), such as when you:
          </p>
          <ul>
            <li>
              Visit our webSite at <Link to={"/"}>https://www.rexett.com</Link>,
              or any website of ours that links to this privacy notice.
            </li>
            <li>
              Engage with us in other related way, including any web related
              services such as web development, web design, ecommerce, mobile
              app.
            </li>
          </ul>
          <p>
            Questions or Concerns? Reading this privacy notice will help you
            understand your privcy rights and choices. if you do not agree with
            our polices and practices, please do not use our Services. If you
            still have any questions or concerns, please contact us at
            services@rexett.com.
          </p>
        </div>
        <div className={classes.summaryPoints}>
          <h2>Summary of Key Points</h2>
          <h3>What personal information do we process?</h3>
          <p>
            when you visit, use, or navigate our services, we may process
            personal information depending on how you interact with us and the
            Services, the choices you make, and the products and features you
            use.
          </p>
          <h3>Do we process any sensitive personal information?</h3>
          <p>we do not process senstive personal information.</p>
          <h3>Do we receive any information from third parties?</h3>
          <p>We do not receive any information from third parties.</p>
          <h3>How do we process your information?</h3>
          <p>
            We process your information to provide, improve and administer our
            Services, communicate with you, for security and fraud prevention,
            and to comply with law. We may also process your information for
            other purpose with your consent. We process your information only we
            have a valid legal reasonto do so.
          </p>
          <h3>
            In what situations and with which type of parties do we share
            personal information?
          </h3>
          <p>
            we may share information in specfic situations and with secific
            categoies of third parties.
          </p>
          <h3>How do we keep your infomation safe?</h3>
          <p>
            We have organizational and technical process and prceedures in place
            to protect your personal information. However, no electronic
            transmission over the internet or information storage technology can
            be guaranted to be 100% secure, so we cannot promise or guarantee
            that hackers, cybercriminal, or other unauthorized third parties
            will not be able to defeat our secuity and improperly collect,
            access, steal, or modify your information.
          </p>
          <h3>What are your rights?</h3>
          <p>
            Depending on where you are located geographically, the applicable
            privacy law may mean you have certain rights regarding your personal
            information.
          </p>
          <h3>How do you exercise your rights?</h3>
          <p>
            The easiest way to exercise your rights is by submitting a data
            subject access request or by contacting us. We will consider and act
            upon any request in accordance with applicable data protection laws.
          </p>
        </div>
        <div className={classes.tableContent}>
          <h2>Table of contents</h2>
          <ul>
            <li>What information do we collect?</li>
            <li>How do we process your infomation?</li>
            <li>
              What legal bases do we rely on to process your personal
              information?
            </li>
            <li>When and with whom do we share your personal information?</li>
            <li>Do we use Cookies and other tracking technologies?</li>
            <li>How long do we keep your information?</li>
            <li>How do we keep your information safe?</li>
            <li>Do we collect information from minors?</li>
            <li>What are your privacy rights?</li>
            <li>Controls for don-not-track features.</li>
            <li>Do we make update to this notice?</li>
            <li>How can you contact us about this notice?</li>
            <li>
              How can you review, update, or delete the data we collect from
              you?
            </li>
          </ul>
        </div>
        <div>
          <h2>1. What information do we collect?</h2>
          <h3>
            Personal information you disclose to us( we collect personal
            information that you provide to us).
          </h3>
          <p>
            We collect personal informationthat you voluntarily provide to us
            when you express an interest in obtaining information about us or
            our Services, when you particpate in activities on the Services, or
            otherwise when you contact us.
          </p>
          <h4>Personal information provided by you.</h4>
          <p>
            {" "}
            The personal information that we collect depends on the context of
            your interactions with us and the Services, the choices you ake, and
            the products and features you use. The personal information we
            collect may include the following:
          </p>
          <ul>
            <li>Names</li>
            <li>Email Addresses</li>
            <li>Username</li>
            <li>Contact Preferences</li>
            <li>Company Name</li>
            <li>Phone number</li>
            <li>Mailing Addresses</li>
            <li>Job titles</li>
          </ul>
          <h4>Sensitive information</h4>
          <p>
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </p>
          <h2>2. How do we process your information?</h2>
          <p>
            We process your information to provide, improve and administer our
            Services, communicate with you, for secuity and fraud prevention,
            and to comply with law. we may also process your information for
            other purposes with your consent.
          </p>
          <h3>
            We process personal information for a variety of reasons, depending
            on how you interact with our Services, including:
          </h3>
          <ul>
            <li>
              {" "}
              <span>
                To deliver and facilitate delivery of Servics to the user:
              </span>{" "}
              We may process your information to provide you with the requested
              Service.
            </li>
            <li>
              <span>To respond to user inquiries/offer support to users:</span>{" "}
              We may process your information to respond to your inquiries and
              solve any potential issue you might have with the requested
              service.
            </li>
            <li>
              <span>To send administrative information to you:</span> We may
              process your information to send you details about our products
              and Services, changes to our terms and policies, and other similar
              information.
            </li>
            <li>
              <span>To save or protect an individual's vital interest: </span>
              We may process your information when necessary to save or protect
              an individual's vital interest, such as to prevent harm.
            </li>
          </ul>
          <h2>
            3. What legal bases do we rely on to process your information?
          </h2>
          <p>
            We only process your personal information when we believe it is
            necessary and we have valid legal reason(i.e., legal basis) to do so
            under applicable law, like with your consent to comply with laws, to
            provide you services to enter into or fullfill our contractual
            obligations, to protect your rights, or to fullfill or legitimate
            business interests.
          </p>
          <p>
            The general Data Protection Regulation(GDPR) and UK GDPR requires us
            to explain the valid legal bases we rely on in order to process your
            personal informatio. As such, we may rely on the following legal
            bases to process your personal information:
          </p>
          <ul>
            <li>
              <span>Consent:</span> We may process your information if you have
              given us permission(i.e., consent) to use your personal
              information for a specific purpose. You can withdraw your consent
              at any time by contacting us by using the contact details provide
              in the policy.
            </li>
            <li>
              <span>Performance of a contract:</span> We may process your
              personal information when we believe it is necessay to fullfill
              our contractual obligations to you, including providing our
              Services or at your request prior to entering in to a contract
              with you.
            </li>
            <li>
              <span>Legal obligations:</span> We may process your information
              where we believe it is necessary for compliance with our legal
              obligations, such as to cooperate with a law enforcement body or
              regulatory agency, exercise or defend our legal rights, or
              disclose your information as evidence in litigation in which we
              are involved.
            </li>
            <li>
              <span>Vital interests:</span> we may process your information
              where we believe it is necessary to protect your vital interests
              or the vital interests of a third party, such as situations
              involving potential threat to the safety of any person.
            </li>
          </ul>
          <h2>4. When and with whom do we share your personal information?</h2>
          <p>
            <span>
              Vendors, consultants and other third-party service providers:
            </span>{" "}
            We may share your data with third-party vendors, service providers,
            contractors, or agents("third-parties") who perform service for us
            or on our behalf and require access to such information to do that
            work. We have contracts in place with our third parties, which are
            designed to help safeguard your personal information. This means
            that they canot do anything with your personal information with any
            organization apart from us. They also commit to protect that data
            they hold on our behalf and to retain it for the period we instruct.
            The categories of third parties we may share personal information
            with are as follows.
          </p>
          <ul>
            <li> Data storage service providers</li>
            <li>Website hosting service providers</li>
            <li>Email marketing service providers</li>
          </ul>
          <p>
            We also may need to share your personal information in the following
            situations
          </p>
          <ul>
            <li>
              <span>Business transfers: </span> we may share or transfers your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our buisness to another company.
            </li>
          </ul>
          <h2>5. Do we use coookies and other tracking technologies?</h2>
          <p>
            We may use cookies and similar tracking technologies(like web
            beacons and pixels) to access or stor information. Specific
            information about how we use such technologies and how can refuse
            certain is set out in our cookie notice.
          </p>
          <h2>6. How long do we keep your information?</h2>
          <p>
            We will only keep your personal information for a long as it is
            necessary for the purpose det out in this privacy notice, unless a
            longer retention period is required or permitted by law(such as tax,
            accounting, or the legal requirements). No purpose in this notice
            will require us keeping your personal information for longer than 2
            years.
          </p>
          <p>
            When we have no ongoing legitimate business need toprocess your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible(for example, because your
            personal information has been stored in backup archievs), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </p>
          <h2>7. How do we keep your information safe?</h2>
          <p>
            We have implemented appropriate and reasonable technical and
            organizational secuity measures designed to protect the secuity of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the internet or information storage technology can be guaranted
            to be 100% secure, so we cannot promise or guarantee that hackers,
            cybercriminals, or other unauthorized third parties will not be able
            to defeat our security and improperly collect, access, steal, or
            modify your information. Although we will do our best to protect
            your personal information, transmission of personal information to
            and from our Services is at your own risk. You should only access
            the Services within a secure environment.
          </p>
          <h2>8. Do we collect information from minors?</h2>
          <p>
            We do not knowingly solicit data from or market to children under 18
            years of age. By using the Services, you represent that you are at
            least 18 or that you are the parent or guardian of such a minor and
            consent to such minro dependent's use of the Services. If we learn
            that personal information from user less than 18 years of age has
            been collected, we will deactivate the account and take reasonable
            measure to promptly delete such data from our records. If you become
            aware of any data we may have collected from children under 18,
            please contact us at services@rexett.com.
          </p>
          <h2>9. What are your privacy rights? </h2>
          <p>
            In some regions(like the EEA, UK , Switerland), you have certain
            rights under applicable data protection laws. These include the
            right:
            <ul>
              <li>
                {" "}
                To request access and obtain a copy of your personal
                information.
              </li>
              <li>To request rectification or erasure.</li>
              <li>To restrict the processing of your personal information.</li>
              <li>
                If applicable, to data portability and not to be subject to
                automated decision-making.
              </li>
            </ul>
            In certian circumstances, you may also have the right to object to
            the processing of your personal information. you can make such a
            request by contacting us by using the contact details provide in the
            policy.
          </p>
          <p>
            we will consider and act upon any request in accordance with
            applicable data protection laws. If your are located in the EEA or
            UK and you believe we are unlawfully proccesing your personal
            information, you also have the right to complain to you{" "}
            <span className={classes.Members}>
              Member state data protection authority or uk data protection
              authority. If your located in Switzerland, you may contact the
              Federal data Protection and Information Commissioner.
            </span>
          </p>
          <p>
            <span>Withdrawing your consent:</span> If we are relying on your
            consent to process your perosnal information, you have the right to
            withdraw your consent at any time. You can withdarw your consent at
            any time by contacting us by using the contact details provided in
            the policy. However, please note that this will not affect the
            lawfulness of the processing before its withdrawal nor, will it
            affect the processing of your personal information conducted in
            reliance on lawful processing grounds other than consent.
          </p>
          <p>
            <span>Opting out of marketing and promotional communications:</span>{" "}
            You can unsubscribe from our marketing and promotional
            communications at any time by clicking on the unsubscribe link in
            the emails that we send, or by contacting us using the details
            provided in the policy. You will then be removed from the marketing
            lists. However, we may still communicate with you-- for example, to
            send you service-related message that are necessary for the
            administration and use of your account, to respond to service
            requests, or for other non-marketing purpose.{" "}
          </p>
          <p>
            <span>Cookies and similar technologies:</span> Most web browsers are
            set to accept cookies by default. If you prefer, you can usually
            choose to set your browsers to remove cookies and to reject cookies.
            If you choose to remove cookies or reject cookies, this could affect
            certain features or services of our services. if you have any
            questions or comments about your privacy rights, you may email us at
            services@rexett.com{" "}
          </p>
          <h2>10. Controls for Do-Not-Track features</h2>
          <p>
            Most web browsers and some mobile operating system and mobile
            application include a Do-Not-Track(DNT)feature or setting you can
            activate to signal your privacy preference not to have data about
            your online browsing activities monitored and collected. At this
            stage no uniform technology standard for rcognized and implementaing
            DNT signals has been finalized. As such, we do not currently respond
            to DNT browsers signals or any other machnaism that automatically
            communicates your choice not be tracked online. If a standard for
            online tracking is adopted that we must follo in the future, we will
            inform you about that practice in a revised version of this privacy
            notice.
          </p>
          <h2>11. Do we make updates to this notice? </h2>
          <p>
            We may update this privacy notice from time to time. The updated
            version will be indicated by an updated "Revised" date and the
            update version will be effective as soon as it is accessible. If we
            make material changes to this privacy notice, wemay notify you
            either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourge you to review this
            privacy notice frequently to be informed of how we are protecting
            your information.
          </p>
          <h2>12. How can you contact us about this Notice? </h2>
          <p>
            If you have any questions or comments about this notice, you may
            email us at services@rexett.com or contact us via contact page, you
            will get more information in detail through contact page{" "}
            <Link to={"/contact"}>https://www.rexett/contact.com</Link>
          </p>
          <h2>
            13. How can you review, update, or delete the data we collect from
            you?
          </h2>
          <p>
            Based on the applicable laws of your country, you may have the right
            to request access to the personal information we collect from you,
            change the information,or delete it. To request to review , update
            or delete your personal information, you may email us at
            services@rexett.com or contact us via contact page, you will get
            more information in detail through contact page{" "}
            <Link to={"/contact"}>https://www.rexett/contact.com</Link>
          </p>
        </div>
        </div>
      </main>
    </>
  );
};

export default PolicyRexett;
