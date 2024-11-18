import axios from "axios";
import { NextResponse } from "next/server";
import QueryString from "qs";

const APP_ID = process.env.MS_APP_ID;
const APP_SECERET = process.env.MS_APP_SECERET;
const TOKEN_ENDPOINT = process.env.MS_TOKEN_ENDPOINT;
const MS_GRAPH_SCOPE = process.env.MS_GRAPH_SCOPE;

const postData = {
  client_id: APP_ID,
  scope: MS_GRAPH_SCOPE,
  client_secret: APP_SECERET,
  grant_type: "client_credentials",
};

const emailNotification = async (data) => {
  let recipients = [
    {
      emailAddress: {
        address: "info@advancemarketanalytics.com",
      },
    },
    {
      emailAddress: {
        address: "sales@advancemarketanalytics.com",
      },
    },
  ];
  if (data.direct) {
    recipients = [
      {
        emailAddress: {
          address: "info@advancemarketanalytics.com",
        },
      },
      {
        emailAddress: {
          address: "sales@advancemarketanalytics.com",
        },
      },
      {
        emailAddress: {
          address: "accounts@advancemarketanalytics.com",
        },
      },
    ];
  }
  let accessToken = "";
  const tokenResponse = await axios.post(
    TOKEN_ENDPOINT,
    QueryString.stringify(postData)
  );
  accessToken = tokenResponse.data.access_token;
  const {
    from = `marketing@advancemarketanalytics.com`,
    subject = "Report Request",
    message = "<p>Hi, How are you?</p>",
    cc = "",
  } = data;

  // messages/{id}/reply
  let apiUrl = `https://graph.microsoft.com/v1.0/users/${from}/sendMail`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  let emailBody = {
    message: {
      subject: subject,
      body: {
        content: message,
        contentType: "HTML",
      },
      toRecipients: [...recipients],
      ccRecipients: [],
      attachments: [],
    },
  };

  try {
    await axios.post(apiUrl, emailBody, { headers });
    // const sentEmailId = await getEmailId(accessToken, from, subject);
    console.log("message sent");
    return "success";
  } catch (error) {
    console.log(error);
    throw new Error("email sent error: " + error.message);
  }
};

export async function POST(request) {
  const body = await request.json();
  console.log("body", body);
  const msgBody = getMessageBody(body);
  const message = await emailNotification({
    message: msgBody,
    direct: body.direct,
    subject: body.subject,
  });
  return NextResponse.json({ success: true });
}

const getMessageBody = (data) => {
  return data.direct
    ? `
  <div style="background-color: #222222; font-family: Arial, sans-serif; margin: 0; padding: 0;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #222222; padding: 20px;">
            <tr>
                <td align="center">
                    <table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff"
                        style="margin: auto; background-color: white;">
                        <tr>
                            <td style="text-align: center; padding: 20px;">
                                <img src="https://multisite-public.s3.ap-south-1.amazonaws.com/logo.webp" alt="Company Logo"
                                    style="max-width: 150px;">
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: center; padding: 0px 20px;">
                                <h2 style="color: #333333; margin: 0;">Hi AMA Team,</h2>
                                <p style="color: #333333;">The following enquiry has come</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0px 20px;">
                                <table width="100%" border="1" cellspacing="0" cellpadding="10"
                                    style="border-collapse: collapse; border-color: #dddddd;">
                                    <tr>
                                        <td width="20%" style="color: #333333; padding: 5px 10px;"><strong>Name:</strong>
                                        </td>
                                        <td style="color: #333333; padding: 5px 10px;"> ${data.full_name}</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;"><strong>Email:</strong></td>
                                        <td style="color: #333333;">${data.email}</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;"><strong>Phone:</strong></td>
                                        <td style="color: #333333;">${data.phone}</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;"><strong>Company:</strong></td>
                                        <td style="color: #333333;"> ${data.company_name} </td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;"><strong>Designation:</strong></td>
                                        <td style="color: #333333;">${data.designation}</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;"><strong>Country:</strong></td>
                                        <td style="color: #333333;"> ${data.country} </td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;"><strong>Comment:</strong></td>
                                        <td style="color: #333333; font-style: italic;">
                                           ${data.comment}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;"><strong>Report:</strong></td>
                                        <td style="color: #333333; font-style: italic;">
                                           <a href="${data.report_page_link}"> ${data.report_name} </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;">
                                          <strong>paymentMode:</strong>
                                        </td>
                                        <td style="color: #333333; font-style: italic;">
                                          ${data.paymentMode}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;">
                                          <strong>Amount:</strong>
                                        </td>
                                        <td style="color: #333333; font-style: italic;">
                                          ${data.amount}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: center; color: #333333; font-size: 12px; padding: 20px;">
                                Advance Market Analytics Consulting Private Limited
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
  `
    : `
  <div style="background-color: #222222; font-family: Arial, sans-serif; margin: 0; padding: 0;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #222222; padding: 20px;">
            <tr>
                <td align="center">
                    <table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff"
                        style="margin: auto; background-color: white;">
                        <tr>
                            <td style="text-align: center; padding: 20px;">
                                <img src="https://multisite-public.s3.ap-south-1.amazonaws.com/logo.webp" alt="Company Logo"
                                    style="max-width: 150px;">
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: center; padding: 0px 20px;">
                                <h2 style="color: #333333; margin: 0;">Hi AMA Team,</h2>
                                <p style="color: #333333;">The following enquiry has come</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0px 20px;">
                                <table width="100%" border="1" cellspacing="0" cellpadding="10"
                                    style="border-collapse: collapse; border-color: #dddddd;">
                                    <tr>
                                        <td width="20%" style="color: #333333; padding: 5px 10px;"><strong>Name:</strong>
                                        </td>
                                        <td style="color: #333333; padding: 5px 10px;"> ${data.full_name}</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;"><strong>Email:</strong></td>
                                        <td style="color: #333333;">${data.email}</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;"><strong>Phone:</strong></td>
                                        <td style="color: #333333;">${data.phone}</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;"><strong>Company:</strong></td>
                                        <td style="color: #333333;"> ${data.company_name} </td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;"><strong>Designation:</strong></td>
                                        <td style="color: #333333;">${data.designation}</td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;"><strong>Country:</strong></td>
                                        <td style="color: #333333;"> ${data.country} </td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;"><strong>Comment:</strong></td>
                                        <td style="color: #333333; font-style: italic;">
                                           ${data.comment}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333;"><strong>Report:</strong></td>
                                        <td style="color: #333333; font-style: italic;">
                                           <a href="${data.report_page_link}"> ${data.report_name} </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: center; color: #333333; font-size: 12px; padding: 20px;">
                                Advance Market Analytics Consulting Private Limited
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
  `;
};
