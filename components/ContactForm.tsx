import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('https://api.test.cyberia.studio/api/v1/feedbacks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.status === 422) {
      const data = await response.json();
      setErrors(data.errors);
    } else {
      // Handle successful submission
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Имя</label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </div>
      <div>
        <label htmlFor="message">Сообщение</label>
        <TextArea
          id="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
      </div>
      <Button type="submit">Отправить</Button>
    </FormContainer>
  );
};

export default ContactForm;
