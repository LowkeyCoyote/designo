import ContactForm from "@components/contact/ContactForm";

const ContactContainer = () => {
  return (
    <div className="flex items-center rounded-lg bg-peach px-24 py-14 
    bg-intro-contact bg-no-repeat bg-left-top md:flex-col md:gap-10 md:px-12 md:py-[72px]
    sm:rounded-none sm:bg-intro-contact-mobile sm:bg-top sm:px-6
    ">
      <div className="fadeInLeft text-white flex-[0_0_60%] pr-28 md:flex-none md:pr-0 sm:text-center">
        <h1 className="mb-8">Contact Us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactContainer;
