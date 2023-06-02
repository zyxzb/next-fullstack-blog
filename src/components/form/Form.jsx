'use client';

import { useState } from 'react';
import Button from '../button/Button';
import styles from './form.module.css';

const initState = {
  name: '',
  email: '',
  message: '',
};

const Form = () => {
  const [formData, setFormData] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className={styles.container}>
      <input
        type='text'
        name='name'
        placeholder='name'
        value={formData.name}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <input
        type='text'
        name='email'
        placeholder='email'
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <textarea
        cols='30'
        rows='10'
        name='message'
        placeholder='message'
        value={formData.message}
        onChange={handleChange}
        className={styles.textArea}
        required
      />
      <Button url='#' text='Send' />
    </form>
  );
};

export default Form;
