const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  const { name, email, message } = JSON.parse(event.body);

  // Configuração do serviço de email (exemplo com nodemailer e Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'filipe@extensao.net',
      pass: 'Yb1jBg%{!',
    },
  });

  const mailOptions = {
    from: 'filipe@extensao.net',
    to: email,
    subject: 'Novo contato recebido',
    text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email enviado com sucesso!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao enviar o email.' }),
    };
  }
};
