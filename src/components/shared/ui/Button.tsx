import { ButtonHTMLAttributes, ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import cn from '@utils/cn';
import { useNavigate } from 'react-router-dom';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  link: string;
}

const Button = ({ children, variant, link, className }: ButtonProps) => {
  const navigate = useNavigate();
  const redirectOnButtonClick = () => {
    navigate(link);
  };
  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
      onClick={redirectOnButtonClick}
    >
      {children}
    </button>
  );
};

const buttonVariants = cva(
  'rounded-lg w-fit px-6 py-4 hover:bg-light-peach hover:duration-100 hover:ease-in-out uppercase spacing-2',
  {
    variants: {
      variant: {
        light: 'bg-white hover:text-white',
        dark: 'bg-peach text-white ',
      },
    },
    defaultVariants: {
      variant: 'light',
    },
  },
);

export default Button;
