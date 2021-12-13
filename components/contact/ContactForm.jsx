import React, { useRef, useState, useEffect } from 'react';
import Notification from '../ui/Notification';
import classes from './ContactForm.module.css';

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

const ContactForm = () => {
  const [requestStatus, setRequestStatus] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setErrorMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    setRequestStatus('pending');

    const inputData = {
      email: emailInputRef.current.value,
      name: nameInputRef.current.value,
      message: messageInputRef.current.value,
    };
    try {
      await sendContactData({
        email: emailInputRef.current.value,
        name: nameInputRef.current.value,
        message: messageInputRef.current.value,
      });
      setRequestStatus('success');
      emailInputRef.current.value = '';
      nameInputRef.current.value = '';
      messageInputRef.current.value = '';
    } catch (err) {
      setRequestStatus('error');
      setErrorMessage(error.message);
    }
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success',
      message: 'Message set succcc',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: errorMessage,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How may I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>

          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameInputRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" ref={messageInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
    </section>
  );
};

export default ContactForm;
