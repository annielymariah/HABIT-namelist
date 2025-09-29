import logo from "@/assets/habit-logo.png";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="w-full h-fit grid grid-cols-3 bg-background items-center px-2 border-b border-b-border">
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="Habit"
            className="w-32 mb-2 hover:cursor-pointer"
          />
        </Link>
      </div>

      <nav className="flex justify-center items-center font-mono uppercase">
        <ul className="flex gap-4 text-sm font-medium text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-foreground">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/add-name" className="hover:text-foreground">
              Adicionar Nome
            </Link>
          </li>
          <li>
            <Link to="/view-names" className="hover:text-foreground">
              Visualizar Nomes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
