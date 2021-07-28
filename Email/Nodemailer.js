const nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  // ssl:     true,
  secure: false,
  requireTLS: true,
  auth: {
    user: "024jawadali@gmail.com",
    pass: "mughal#22#786",
  },
});

const sendEmail = async (email, code) => {
  mailOptions = {
    // from: `"Verify Email At Paradise Park" <yourparadisepark1@gmail.com>`,
    to: `${email}`,
    subject: "Please confirm your Email account",
    html: `<h3>${code}</h3>`,
  };
  //   console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      return error;
    } else {
      //   console.log(response);
      return response;
    }
  });
};
module.exports = sendEmail;
