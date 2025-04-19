const nodemailer = require("nodemailer");
require("dotenv").config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

class Mail {
  constructor() {
    this.mailOptions = {
      from: process.env.EMAIL,
      name: "Manoj",
    };
  }
  setTo(receiver) {
    this.mailOptions.to = receiver;
  }
  setSubject() {
    this.mailOptions.subject = "Welcome to FASTRACK";
  }
  setText() {
    this.mailOptions.text = "welcome";
  }
  setHtml(html) {
    this.mailOptions.html = html;
  }
  send() {
    transporter.sendMail(this.mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("email sent successfully" + info.response);
      }
    });
  }
}

module.exports = Mail;
