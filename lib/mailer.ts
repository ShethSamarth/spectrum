import nodemailer from "nodemailer"
import { MailTemplate } from "@/components/mail-template"

interface MailerProps {
  subject: string
  name: string
  email: string
  mobile: string
  message: string
  resume?: string | null
}

export const mailer = async ({
  subject,
  name,
  email,
  mobile,
  message,
  resume = null,
}: MailerProps) => {
  const year = new Date().getFullYear()

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,

    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    bcc: process.env.MAIL_BCC,
    subject,
    html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap"
            rel="stylesheet"
          />

          <style type="text/css">
            /* Mobile Styles */
            @media only screen and (max-width: 600px) {
              body {
                padding: 0 !important;
              }

              table[class="table600"] {
                width: 100% !important;
              }

              td[class="td-container"] {
                padding: 0 10px !important;
              }

              td[class="td-header"] {
                padding: 10px 0 !important;
              }

              td[class="td-content"] {
                padding: 10px 0 !important;
              }

              td[class="td-content"] {
                padding: 0px 17px !important;
                font-size: 16px !important;
                line-height: 24px !important;
              }

              td[class="td-footer"] {
                padding: 10px !important;
              }

              p[class="massge"] {
                font-size: 12px !important;
                margin: 10px 0 !important;
              }
              td[class="responsive-mobile"] {
                padding: 8px 22px !important;
                text-align: left !important;
              }
            }
          </style>
        </head>

        <body style="background-color: #e5e5e5">
          <div style="padding: 0px; color: #000; font-size: 15px; width: 100%">
            <table
              class="table600"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
              style="
                background: #ffffff;
                margin: 0 auto;
                max-width: 600px;
                width: 100%;
              "
            >
              <tr>
                <td class="td-container">
                  <div style="text-align: center; position: relative">
                    <table
                      cellpadding="0"
                      cellspacing="0"
                      style="width: 100%; padding: 30px"
                    >
                      <tr>
                        <td
                          class="td-header"
                          style="text-align: center; border-bottom: 5px solid #f8f1f1"
                        >
                          <a class="logo" href=${process.env.NEXT_PUBLIC_URL}>
                            <img
                              src="${
                                process.env.NEXT_PUBLIC_URL
                              }/mail/spectrum-logo-2.webp"
                              width="150"
                              alt="logo"
                              border="0"
                            />
                          </a>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              <tr align="center">
                <td class="td-content">
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    style="background-color: #fff; color: #000; padding: 8px"
                  >
                    <tr>
                      <td>
                        <p
                          style="
                            margin: 0;
                            text-align: center;
                            font-size: 24px;
                            padding: 12px;
                            text-transform: uppercase;
                            font-weight: 600;
                            background-color: #fff;
                            color: #000;
                            font-family: Poppins, sans-serif !important;
                          "
                        >
                          Contact <span style="color: #047bac">Inquiry</span>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="background-color: #fff">
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      width: 100%;
                      color: #333;
                      margin-bottom: 10px;
                      line-height: 23px;
                    "
                  >
                    <tr>
                      <td
                        class="responsive-mobile"
                        style="
                          padding: 4px 53px;
                          padding-bottom: 20px;
                          font-size: 18px;
                          text-align: start;
                          font-family: Poppins, sans-serif !important;
                          line-height: 27px;
                          font-weight: 600;
                        "
                      >
                        New Inquiry Recieved
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="responsive-mobile"
                        style="
                          padding: 4px 53px;
                          text-align: left;
                          font-size: 17px;
                          font-family: Poppins, sans-serif !important;
                        "
                      >
                        <div
                          style="
                            border-bottom: 5px solid #f8f1f1;
                            padding-bottom: 8px;
                          "
                        >
                          <span style="font-size: 20px">Name:</span> ${name}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="responsive-mobile"
                        style="
                          padding: 4px 53px;
                          text-align: left;
                          font-size: 17px;
                          font-family: Poppins, sans-serif !important;
                        "
                      >
                        <div
                          style="
                            border-bottom: 5px solid #f8f1f1;
                            padding-bottom: 8px;
                          "
                        >
                          <span style="font-size: 20px">Email:</span>
                          ${email}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="responsive-mobile"
                        style="
                          padding: 4px 53px;
                          text-align: left;
                          font-size: 17px;
                          font-family: Poppins, sans-serif !important;
                        "
                      >
                        <div
                          style="
                            border-bottom: 5px solid #f8f1f1;
                            padding-bottom: 8px;
                          "
                        >
                          <span style="font-size: 20px">Mobile No:</span> ${mobile}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="responsive-mobile"
                        style="
                          padding: 4px 53px;
                          text-align: left;
                          font-size: 17px;
                          font-family: Poppins, sans-serif !important;
                        "
                      >
                        <div
                          style="
                            border-bottom: 5px solid #f8f1f1;
                            padding-bottom: 8px;
                          "
                        >
                          <span style="font-size: 20px">Resume:</span>
                          <a href="${resume ? resume : "#"}">${resume}</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="responsive-mobile"
                        style="
                          padding: 4px 53px;
                          text-align: justify;
                          font-size: 17px;
                          display: flex;
                          font-family: Poppins, sans-serif !important;
                        "
                      >
                        <div style="font-size: 20px">Message:</div>
                        <div style="padding-left: 4px">${message}</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr style="background-color: #dff6ff">
                <td style="padding: 10px; text-align: center">
                  <p
                    class="massge"
                    style="margin: 10px 0; font-size: 18px; letter-spacing: 1.5px"
                  >
                    <img
                      src="${process.env.NEXT_PUBLIC_URL}/mail/phone-call.png"
                      alt="whatsapp"
                      style="vertical-align: middle; margin-right: 5px"
                    />
                    <a
                      href="tel:+919824589088"
                      target="_blank"
                      style="
                        color: #000000;
                        text-decoration: none;
                        font-family: Poppins, sans-serif !important;
                      "
                      >+91 98245 89088</a
                    >
                    <span
                      style="
                        display: inline-block;
                        border-right: 1px solid #000;
                        height: 22px;
                        margin: -5px 11px;
                      "
                    ></span>
                    <img
                      src="${process.env.NEXT_PUBLIC_URL}/mail/envelope.png"
                      alt="paper-plane"
                      style="vertical-align: middle; margin-right: 5px"
                    />
                    <a
                      href="info@spectrumdyes.com"
                      target="_blank"
                      style="
                        color: #000000;
                        text-decoration: none;
                        font-family: Poppins, sans-serif !important;
                      "
                      >info@spectrumdyes.com</a
                    >
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="
                    text-align: center;
                    font-family: Poppins, sans-serif !important;
                    text-transform: capitalize;
                    color: #000;
                    font-size: 17px;
                    padding: 20px 0px;
                  "
                >
                  © ${year} Spectrum Dyes & Chemicals Pvt. Ltd.
                </td>
              </tr>
            </table>
          </div>
        </body>
      </html>
    `,
  })
}
