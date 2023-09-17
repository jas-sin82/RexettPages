import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from "../policy/PolicyRexett.module.css";
import ScrollUp from "../../scrollUpWindow/ScrollUp";

const TermCondition = () => {
  const { pathName } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
  return (
    <>
      <main className={classes.policy}>
        <ScrollUp />
        <h1>Terms & Conditions</h1>
        <div className={classes.privacyPolicy}>
          <h2>Project Terms</h2>
          <ul>
            <li>
              All estimates/quotes are based on our understanding of your
              requirements and as per given time-frame. Any changes to the
              functionality including micro-improvements, may incur additional
              costs accordingly. Please ensure and clarify our understanding in
              a face to face meeting
            </li>
            <li>
              By accepting a quote, you agree to and accept the terms and
              conditions of Rexett. Acceptance can be verbal, by email, payment
              of Initiation, signing a quote.
            </li>
            <li>
              Clients to ensure that we have included all requirements in the
              quotes/proposals/estimates and that we fully understand their
              requirements. Clients must provide us with clear guidelines along
              with the flow or specific details they may require. When such
              details are not provided, we will proceed with our understanding
              of the requirements and quote accordingly. At a later stage, if a
              discrepancy arises, it may lead to additional costs to accommodate
              the changes. Thus, it is essential that you clarify every aspect
              of your website development and ensure that you have been quoted
              on the right requirements.
            </li>
            <li>
              Any complexity related to specific tasks, must be advised in
              advance and included in the proposal for costing purposes. We
              operate in good faith and rely on our clients to disclose the full
              picture at the time of quotation. Any discrepancy arising due to
              unclear requirements will not be borne by Rexett.
            </li>
            <li>
              There are limited man-hours allocated to each task including
              Project Management and Digital Strategist/Business Analyst. Minor
              changes may be included within the allocated hours. This will be
              analysed on a case-by-case basis.
            </li>
            <li>
              Rexett will make every effort to complete the project/changes in
              the given timeframe. Reasonable delays are accepted if
              functionalities are redefined or modified.
            </li>
            <li>
              Any delays at client’s end, may delay the project and proposed
              timeframes and may incur additional costs.
            </li>
            <li>
              Any bugs (programming errors) reported during or just after the
              development does not attract additional charges.
            </li>
            <li>
              {" "}
              Any re-work on an already completed task will attract additional
              charges. Any changes in the design after the design approval will
              incur additional charges.
            </li>
            <li>
              Any modifications requested during the development or after the
              Go-Live approval will incur additional charges. All additional
              work, over and above the estimates is charged separately. Under no
              circumstances will Rexett be liable for any delays caused by
              change in the project brief.
            </li>
            <li>
              Website/application content and all related materials need to be
              provided to us within the first two weeks of starting the project.
              Any delays thereafter may delay the project and may incur
              additional charges if it goes beyond reasonable timeframe.
            </li>
            <li>
              Our websites/applications are generally tested on PCs and include
              near recent versions of following browsers: IE, Firefox, Chrome &
              Safari. If you require testing to be done on any other browser,
              please let us know in advance.
            </li>
            <li>
              Responsive/multi-device compatible web pages are tested on iPhone
              and iPads. If you require testing to be done on any other device,
              please discuss it in advance.
            </li>
            <li>
              Please note that at any stage during the project, stalling of the
              project for over two calendar months will incur SEK 1500/week
              administration costs. Furthermore, it may increase the previously
              approved estimates. If you require the project to be put on hold,
              please advise us in writing in advance. To put the project on hold
              without incurring additional charges, we will need the account to
              be up to date based on the work done. Further details can be
              discussed if such a situation arises.
            </li>
            <li>
              Rexett codes (not including open source software) are copyrights
              of Rexett. The codes can be handed over at an additional cost for
              use once all previous invoices are settled, on the condition that
              the codes are used only for use or modification for re-use for
              further development for the specified client or subsequent owners
              of that legal entity. Under no circumstance, the codes will be
              allowed to be used for re-selling or duplication purposes.
            </li>
            <li>
              Depending upon the functionalities required, there may be 3rd
              party components such as Third Party Payment Gateways or SSL
              certificates involved in building a website/application. Although
              Rexett does its best in recognising the suitability of any such
              component, any unforeseen limitations of 3rd party components are
              beyond our control. Any third-party component purchase costs (such
              as SSL, Payment gateway, Google Adwords, Plug-in licenses etc) are
              not included in our quotes.
            </li>
            <li>
              {" "}
              Rexett offer packages in co-ordination with third party providers.
              Changes to the third party provider’s rules and policies may
              ultimately effect the services we provide or the terms and
              conditions herein.
            </li>
            <li>
              The client must recognize that at times there may be unforeseen
              circumstances that will delay the development process,
              particularly with reference to the integration of third party
              software. We will try our best to complete the project as agreed
              in the proposal. As long as it is within a reasonable period, the
              client agrees not to penalize us for any genuine delay, when every
              effort to keep the project on the proposed schedule is taken.
            </li>
            <li>
              Domain registration/renewal etc charges are not included as a part
              of any project/proposal unless mentioned otherwise. If required, a
              quote for which will be submitted separately and approved by the
              client.
            </li>
            <li>
              Hosting charges are not included in the quotations unless
              mentioned otherwise. Rexett can organise an appropriate hosting
              solution if required, a quote for which will be submitted
              separately and approved by the client. Where clients decide to
              organise their own hosting, we should be consulted before
              finalising the type of hosting and database, as it should meet the
              requirements of the technology used for the development. Please
              note that we’ll require full access with hosting support for
              testing and deploying the application. Rexett will not be liable
              for any delays or errors caused by direct or indirect actions of
              the hosting company.
            </li>
            <li>
              Nothwithstanding any other provision in the agreement, in
              consideration of the Customer entering into this agreement with
              Rexett, upon full payment of any outstanding invoices, Rexett will
              grant an unconditional license to the Customer to reproduce,
              publish, communicate, use, exploit, vary, or otherwise deal with
              1.the graphics, 2. texts and 3. images used in the published
              website and associated of form and functionality. This will not
              include the intellectual property relating to the production of
              the website including the digital strategies, programming codes,
              database structures, scripts, forms or functionalities.
            </li>
          </ul>
          <p>
            Questions or Concerns? Reading this Terms & Conditions notice will
            help you understand your rights and choices. if you do not agree
            with our Terms and Conditions, please do not use our Services. If
            you still have any questions or concerns, please contact us at
            services@rexett.com.
          </p>
        </div>
        <div className={classes.summaryPoints}>
          <h2>Annual Maintenance Terms</h2>
          <h3>Basic Annual Maintenance Package Terms</h3>
          <ul>
            <li>
              All maintenance packages are for a minimum of 12 months period.
            </li>
            <li>
              Maintenance packages are billed annually, however are paid monthly
              via direct debit on the 1st of every month.
            </li>
            <li>
              Packages may include 12 months basic website hosting, email
              hosting and DNS hosting.
            </li>
            <li>
              Packages are designed to serve website maintenance tasks only. The
              hours may not be used for projects such as full redesign or major
              functionality add-ons.
            </li>
            <p>
              Does-not include any Digital Strategy, Business Analysis, Solution
              Architect, SEO and Digital Marketing work.
            </p>
            <li>
              Work-hours are tracked in 15minutes blocks. The support time is
              used once every month to take a full backup of your website. After
              that, we work on updating your Application along-with any website
              fixes that may arise as a result of the updates. Any remaining
              hours can be used to make changes to the website. Any additional
              workhours are requested for your approval.
            </li>
            <li>
              Any extra hours used will be billed separately @ SEK 1000/hour
            </li>
            <li>
              Support requests need to be sent via email to services@rexett.com
            </li>
            <li>Any urgent tasks will be charged separately.</li>
            <li>
              The package is auto renewed every year on its anniversary date.
            </li>
          </ul>
          <h3>Payment terms</h3>
          <p>
            Monthly maintenance package fees require monthly Bank trasfer or
            credit card. We accept invoices for monthly maintenance from Our
            Local Customers(only Swedish Residence).
          </p>
          <p>
            An administrative fee of SEK 250 will be charged to the clients
            account for any late payments or declined credit card charges.
          </p>
          <p>
            More than three missed payments in a year may attract termination of
            the package and the client will need to pay immediately the entire
            remaining amount on the package.
          </p>
          <p>
            There are absolutely no refunds for any fees related to the monthly
            maintenance package.
          </p>
          <h3>Termination</h3>
          <p>
            In case Client need to cancel the auto annual renewal, please inform
            us in writing (email) at least one month prior to the renewal date.
          </p>
          <p>
            Ongoing term: For any reason if the Client decides to terminate an
            on-going maintenance package then they will need to pay the balance
            amount of the remaining months.
          </p>
          <p>
            Rexett reserves the right to terminate annual maintenance at anytime
            with written notice to the Client.
          </p>
        </div>
        <div className={classes.tableContent}>
          <h2>General Approach</h2>
          <p>
            For general website design & development projects we employ the
            following steps
          </p>
          <ul>
            <li>
              {" "}
              Upon quote acceptance/signoff, initiation payment is processed to
              start the project. As required by the project, we discuss the
              requirements in detail.
            </li>
            <li>
              {" "}
              Once we have the brand details such as logo, images, branding
              materials etc, we will have a mock-up for your review within 1 to
              15 working days.
            </li>
            <li>
              You can review the design and suggest improvements accordingly.
              Depending upon your project, generally up to 1 to 3 design
              modifications that can be done within the given estimates. Please
              refer to your allocated design and development hours for details.
            </li>
            <li>At this stage, the developers will start work on project.</li>
            <li>
              Estimate time for individual project, it depends upon your project
              complexities.
            </li>
            <li>How long do we keep your information?</li>
            <li>How do we keep your information safe?</li>
            <li>
              Once the Project is ready from our end, we generally hand it over
              to you for further review, test and/or to upload/change contents
              as necessary.
            </li>
            <li>
              At this stage you need to give us a Go-Live date for us to make
              the new website/project live.
            </li>
            <li>
              Also, generally speaking, going-back and forth takes a lot of
              time. We encourage you to provide all necessary details, at the
              start of the project to ensure that the project team’s time is
              efficiently utilised on your project and you do not incur any
              unnecessary additional costs.
            </li>
            <li>
              You will be kept updated via emails and/or telephone calls as the
              project demands. However, please do not hesitate to contact us any
              time you require a project status. Also, please always keep us
              updated with your relevant email addresses/contact details.
            </li>
            <li>
              Once the website/application has been made live on the client’s
              domain, it is their responsibility to take regular full back-ups
              and to update all components and third party softwares.
            </li>
            <li>
              We consider ourselves to be very flexible and adaptable and
              approach all requests with a ‘can do’ attitude. If you require
              something changed, please feel free to discuss with us. Please
              contact us if you require further details or have any questions.
              We look forward to working together with you on your project!
            </li>
            <li>
              {" "}
              Cost to design and develop a Project, it depends upon your project
              requirements.
            </li>
          </ul>
        </div>
        <div>
          <h2>Payment / Refund Terms</h2>
          <p>
            All invoices are to be processed as per the schedule via your
            preferred method of payment.
          </p>
          <p>
            {" "}
            Milestone payments must be made within 7 working days of each
            milestone/schedule, unless mutually agreed otherwise. Final payment
            must be made prior to website/application/project going live.
          </p>
          <ul>
            <li>
              Receipt of payment is deemed as acceptance of the quote,
              milestone, delivery, project and terms & conditions.
            </li>
            <li>
              Rexett reserves the right to negotiate and refund appropriate
              portion of the amount paid by customer towards the requested
              service. If you cancel your order after making the payment, but
              the work has not commenced, we will refund 75% of the payment that
              you have already made. If the order is cancelled after the
              commencement of work, the maximum refund or charge will be 50% of
              the invoice. There will be no refund or adjustments if
              cancellation is called when more than 50% of the work has been
              completed. All cancellations must be received in writing and can
              be sent via regular mail, email. Telephone requests on
              cancellations will not be accepted. For minor or once-off works,
              payments need to be made either in advance or as per the terms
              mentioned in the invoice/proposal. If you require any changes to
              the terms, you must inform us in writing (emails accepted) within
              two working days of the receipt of the same.
            </li>
            <li>
              Late fees and charges: All outstanding invoices will incur a late
              payment fee of 10% of the pending amount and an administration fee
              of SEK 250 per month, from the due date.
            </li>
            <li>
              <span>Due date: </span> Is the date on which the payment is due as
              per the terms on the invoice/proposal
            </li>
            <li>
              <span>Outstanding Invoice: </span>
              An invoice is deemed to be outstanding if the payment is still due
              after 14 days of the expiry of the due date
            </li>
            <li>
              <span>Debt Collection: </span>
              Client is provided a further 7 days after late payment fee is
              applied to pay the invoice. Failure to pay will result in the
              outstanding amount referred to a debt collector. Rexett will not
              be liable for any costs or charges associated with the recovery of
              the outstanding amount. Any charges associated with the recovery
              of the outstanding amount (debt collectors, administration
              charges, legal fees) will be referred to the client for
              processing.
            </li>
            <li>
              {" "}
              If you are late with a payment or have any queries regarding the
              Invoice, please contact immediately on receiving the invoice or
              reminder emails.
            </li>
            <li>
              All communications/correspondences are generally done via emails.
              It is client’s responsibility to keep us updated with their
              relevant email addresses.
            </li>
            <li>
              Any payment relating to the domain name registration renewal or
              hosting or any 3rd party products or service purchased on behalf
              of the client will have to be paid in full and is non-refundable.
              In case of all renewal cancellations, we must be notified atleast
              30 days before the renewal date.
            </li>
          </ul>
          <h2>Disputes, Liability and Indemnity</h2>
          <p>
            In an event of a dispute, Rexett reserves the right to charge the
            client in full for the work done as well as for the resources spent
            in managing the dispute. In such an event, Rexett reserves the right
            to charge the client without honoring any discounts that were
            previously honored in good faith. Under no circumstances will Rexett
            be liable for any damages arising from misrepresentation or
            misinformation.
          </p>
          <p>
            Rexett reserves the right to refuse service to any client, if these
            are not aligned with our business operating principles and policies.
          </p>
          <p>
            Rexett provides its services as is, without any guarantees on
            security or other issues leading to loss of data, sale or reputation
            related third party. We ensure to the best of our ability that our
            systems and servers are protected from hackers, viruses, intruders
            and other online and offline problems, however we will not be held
            liable for any disruption of services if such situation arises.
          </p>
          <p>
            Rexett will not be liable for any breach of the agreement which is
            caused by a matter beyond its reasonable control including but not
            limited to Act of God, fire, lightning, explosion, war, disorder,
            flood, earth quake, industrial disputes (whether or not involving
            their employees), extremely severe weather, or acts of local or
            central government or other competent authorities.
          </p>
          <h2>Hosting</h2>
          <p>
            Hosting is an annual charge which must be paid in advance for the
            whole year. Except if the client is under one of our Maintenance
            packages.
          </p>
          <p>
            It is the client’s responsibility to renew the hosting in time ie.
            before the expiry date. Failure to renew in time can lead to loss of
            files, data, emails, backups etc. All unpaid hostings are disabled
            or deleted from the server.
          </p>
          <p>
            All renewals must be paid by seven working days prior to the expiry
            date. Rexett will not be responsible for issues relating to delayed
            payment.
          </p>
          <p>
            Hosting are on shared and non-shared servers hosted via third party
            providers. Rexett ensures best to our ability that our systems are
            protected from hackers, viruses, intruders and other online and
            offline problems, however we will not be held liable for any
            disruption of services if such situation arises.
          </p>
          <p>
            <span>Cancellation/Termination:</span> Hosting Cancellation requests
            must be sent in writing or by email one month prior to the expiry of
            the same. Once the hosting has been renewed, it cannot be cancelled
            and must be paid for the full year.
          </p>
          <p>
            If the hosting is not paid and renewed before the expiry date. We
            reserve the right to disable the hosting and all associated services
            including emails and dns records. Additional charges will be
            applicable to re-enable the hosting. Rexett will not be responsible
            for any loss of data, files, emails, backups, restoration costs etc.
          </p>
          <h2>Domain</h2>
          <p>
            All domain registrations and renewals are to be paid in advance.
          </p>
          <ul>
            <li>
              Expiration of a domain can result in service disruption and loss
              of domain.
            </li>
            <li>
              Rexett will not be responsible if a domain expires due to
              non-payment / late payment of the charges. All payments must be
              made by seven working days before the expiry date.
            </li>
            <li>
              It is client’s responsibility to renew their domain names with us.
            </li>
            <li>
              All invoices and dues must be paid in full before we release the
              requested domain name.
            </li>
          </ul>
          <h2>Intellectual Property</h2>
          <p>
            All content of this website is a property of Rexett unless otherwise
            specified. Rexett reserves the right to change the content or
            policies without any prior notice.
          </p>
          <p>
            The project related copyrights can be transferred to the client at
            an additional cost, after the full payment of the project and upon
            signing the Certificate of Acceptance. Rexett reserves the rights to
            refuse the transfer of ownership if irregular circumstances arise.
          </p>
          <p>
            Copyrights handed over to the client do not include rights to re-use
            the code for another website or re-sell the programming codes for
            any commercial or non-commercial purposes. In the case of business
            restructuring or ownership change, ownership of the website may be
            transferred from one owner to another. New owners are not allowed to
            re-sell or re-use for any commercial or non-commercial purpose.
          </p>
          <p>
            Please note that Rexett reserves the right to change the terms and
            conditions without notice.
          </p>
        </div>
      </main>
    </>
  );
};

export default TermCondition;
