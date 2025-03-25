import nodemailer from "nodemailer";

export async function POST(req) {
  const { azienda, name, email, tel, message } = await req.json();

  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "Nuovo Messaggio",
      text: message,
      html: `
        <p><strong>Azienda:</strong> ${azienda}</p>
        <p><strong>Cliente:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tel:</strong> ${tel}</p>
        <p><strong>Messaggio:</strong> ${message}</p>
      `,
    });

    return Response.json({ message: "Email inviata!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Errore", error }, { status: 500 });
  }
}
