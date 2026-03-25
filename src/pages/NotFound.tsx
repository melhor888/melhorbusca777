import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display font-bold text-6xl text-primary">404</h1>
      <p className="text-lg text-foreground mt-4">Página não encontrada</p>
      <p className="text-sm text-muted-foreground mt-2">A página que você procura não existe.</p>
      <Link to="/" className="mt-6 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
        Voltar ao início
      </Link>
    </div>
  );
}
