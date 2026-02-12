import React from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
};

export default function Button({
  children,
  to,
  onClick,
  className = "",
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/40";

  const styles =
    variant === "primary"
      ? "bg-emerald-500 text-black hover:bg-emerald-400"
      : variant === "secondary"
      ? "bg-white/10 text-white border border-white/10 hover:bg-white/15"
      : "border border-white/20 text-white hover:bg-white hover:text-black";

  const combined = `${base} ${styles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
