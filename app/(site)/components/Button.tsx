import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({variant="primary", className="", ...props}: Props){
  const base = "btn ";
  const map = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "border rounded-full px-5 py-3"
  } as const;
  return <button {...props} className={base + map[variant] + (className?" "+className:"")} />;
}
