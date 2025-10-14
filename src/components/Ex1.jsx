// Ex1 — Botão estilizado com Tailwind

// Crie um botão centralizado com a cor azul, texto branco, padding, bordas arredondadas e efeito `hover` para escurecer a cor.

export default function Ex1() {
  return (
    <div className="my-8">
        <h1 className="bg-blue-300 rouded-lg border-4 border-gray-500
         text-2xl font-bold mb-4 w-50 shadow-2xl rounded-3xl hover:bg-blue-500 ">Ex1 - Botão Estilizado</h1>
    </div>
  );
}