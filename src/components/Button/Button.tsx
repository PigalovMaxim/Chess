import cn from "clsx";
import s from "./Button.module.scss";

interface ButtonProps {
  click: () => void;
  classnames: string;
  text: string;
}

const Button = ({ click, classnames, text }: ButtonProps) => {
  return (
    <button onClick={click} className={cn(classnames, s.btn)}>
      {text}
    </button>
  );
};

export default Button;
