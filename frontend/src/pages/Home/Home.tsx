import RootLayout from "@/components/layout/RootLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Home() {
  return (
    <RootLayout>
      <h1 className="font-bold">Sistema de armazenamento de nomes</h1>
      <p className="text-center mt-2 mb-8">
        Desenvolvido por{" "}
        <a
          href="https://github.com/annielymariah"
          target="_blank"
          className="hover:text-chart-1 underline"
        >
          Anniely Mariah
        </a>{" "}
        com o objetivo de facilitar o armazenamento de nomes.
        <br />
        Para melhor navegação, utilize os botões abaixo ou o menu no cabeçalho.
      </p>

      <div className="flex flex-col items-center gap-3 w-full max-w-md">
        <Button className="w-full min-w-[280px] uppercase">
          <Link to="/add/name">Inserir um nome</Link>
        </Button>
        <Button variant="secondary" className="w-full min-w-[280px] uppercase">
          <Link to="/view/names">Visualizar nomes</Link>
        </Button>
      </div>
    </RootLayout>
  );
}
