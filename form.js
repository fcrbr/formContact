import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Lógica para lidar com o envio bem-sucedido
        console.log('Email enviado com sucesso!');
      } else {
        // Lógica para lidar com falhas no envio
        console.error('Erro ao enviar o email.');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Seu nome"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Seu email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Sua mensagem"
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
