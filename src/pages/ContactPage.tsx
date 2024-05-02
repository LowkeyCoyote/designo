import AustraliaImg from '@assets/shared/illustration-australia.svg';
import CanadaImg from '@assets/shared/illustration-canada.svg';
import UnitedKingdomImg from '@assets/shared/illustration-united-kingdom.svg';

import ContactForm from '@components/contact/ContactContainer';
import Location from '@components/shared/Country';

const ContactPage = () => {
  return (
    <section className="contactPage">
        <ContactForm />
      <div className="align-center my-40 flex flex-row justify-between md:mt-32 md:flex-col md:gap-20">
        <Location location="Canada" image={CanadaImg} />
        <Location location="Australia" image={AustraliaImg} />
        <Location location="United Kingdom" image={UnitedKingdomImg} />
      </div>
    </section>
  );
};

export default ContactPage;
