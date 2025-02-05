export const sendEmail = async ({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) => {
  console.log("Sending email to: ", to);
  console.log("Subject: ", subject);
  console.log("Text: ", text);

  return true;
};
