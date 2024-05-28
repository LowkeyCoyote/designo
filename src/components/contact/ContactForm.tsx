import { useForm } from 'react-hook-form';

import IconError from '@assets/shared/icons/icon-error.svg';

type formData = {
  name: string;
  email: string;
  number: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const onSubmit = () => window.location.reload();

  return (
    <form className="flex flex-[0_9_40%] flex-col text-white md:w-full md:flex-none" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="inputContact"
        type="text"
        placeholder="Name"
        {...register('name', { required: true, maxLength: 80 })}
        aria-invalid={errors.name ? 'true' : 'false'}
      />
      {errors.name?.type === 'required' && (
        <div className="ml-4 mt-1 flex flex-row items-center gap-2">
          <p role="alert">Can’t be empty</p>
          <img className="h-full w-auto" src={IconError} alt="" />
        </div>
      )}

      <input
        className="inputContact mt-6"
        type="text"
        placeholder="Email adress"
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        aria-invalid={errors.email ? 'true' : 'false'}
      />
      {errors.email?.type === 'pattern' && (
        <div className="ml-4 mt-1 flex flex-row items-center gap-2">
          <p role="alert">Please use a valid email</p>
          <img className="h-full w-auto" src={IconError} alt="" />
        </div>
      )}
      {errors.email?.type === 'required' && (
        <div className="ml-4 mt-1 flex flex-row items-center gap-2">
          <p role="alert">Can't be empty</p>
          <img className="h-full w-auto" src={IconError} alt="" />
        </div>
      )}

      <input
        className="inputContact mt-6"
        type="tel"
        placeholder="Phone"
        {...register('number', { required: true, maxLength: 12 })}
        aria-invalid={errors.number ? 'true' : 'false'}
      />
      {errors.number?.type === 'required' && (
        <div className="ml-4 mt-1 flex flex-row items-center gap-2">
          <p role="alert">Can't be empty</p>
          <img className="h-full w-auto" src={IconError} alt="" />
        </div>
      )}

      <textarea
        className="inputContact mt-6 h-[102px]"
        placeholder="Your message"
        {...register('message', {
          required: true,
          max: 300,
          maxLength: 300,
        })}
        aria-invalid={errors.message ? 'true' : 'false'}
      />
      {errors.message?.type === 'required' && (
        <div className="ml-4 mt-1 flex flex-row items-center gap-2">
          <p role="alert">Can't be empty</p>
          <img className="h-full w-auto" src={IconError} alt="" />
        </div>
      )}
      <input
        className="ml-auto mt-6 w-fit cursor-pointer rounded-lg bg-white px-6 py-4  uppercase tracking-[2px] text-black duration-100 ease-in-out hover:bg-light-peach hover:text-white  "
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default ContactForm;
