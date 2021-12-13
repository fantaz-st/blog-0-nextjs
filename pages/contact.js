import Head from 'next/head';

import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
