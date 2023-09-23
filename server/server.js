const { subscribe } = require("diagnostics_channel");
const express = require("express");
const mailChimp = require("mailchimp-api-v3");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
});
const mcApiKey = process.env.MAIL_CHIMP_API;
const mcListId = process.env.LIST_ID;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mongo Schema
const blogSchema = new Schema({
  title: String,
  author: String,
  date: String,
  url: String,
  postTitle: String,
  descriptionA: String,
  descriptionB: String,
  descriptionC: String,
  descriptionD: String,
  descriptionE: String,
  descriptionF: String,
  descriptionG: String,
  descriptionH: String,
  subTitleA: String,
  subTitleB: String,
  subTitleC: String,
  subTitleD: String,
  subTitleE: String,
  subTitleF: String,
  subTitleG: String,
  subTitleH: String,
});

const BlogPost = mongoose.model("blogpost", blogSchema);

const mailChimpKey = new mailChimp(mcApiKey);

// api endpoints
app.get("/api/newsletter", (req, res) => {
  mailChimpKey
    .post(`/lists/${mcListId}/members/`, {
      email_address: req.query.email,
      status: "subscribed",
    })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

app.post("/sendMail", (req, res) => {
  console.log(req.body);
  const { fullName, email, companyName, development, message } = req.body;

  console.log(fullName, email, companyName, development, message);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: `${fullName}`,
      to: `${process.env.USER}`,
      subject: `Query related ${development} services`,
      html: `<h1>Email by ${fullName}!</h1> <h4>Query by ${companyName}</h4>
        <p> Email address ${email} provided by you.</p>
        <p>we are Contacted related ${development} service.</p></br>
        <p>${message}</p></b>
        <p>Thanks</p></br>
        <p>Best regards</p></br>
        <p>${fullName}</p>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("form sent" + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    res.status(401).json({ status: 401, info });
  }
});

app.get("/blogPost", async (req, res) => {
  try {
    const post = await BlogPost.find();

    return res.status(200).send(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

app.get("/blogPost/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await BlogPost.findOne({ _id: id });
    // console.log(post);
    return res.status(200).send(post);
  } catch (e) {
    return res.status(422).send(e.message);
  }
});

app.listen(3001, () => {
  console.log("Server is running on Port 3001");
});
