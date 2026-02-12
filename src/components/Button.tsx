import { Link } from "react-router-dom";

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
};

export default function Button({
  children,
  to,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-green-500 text-black shadow-lg shadow-green-500/20 hover:bg-green-400 hover:shadow-green-400/40"
      : "border border-white text-white hover:bg-white hover:text-black";

  if (to) {
    return (
      <Link to={to} className={`${base} ${styles}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
