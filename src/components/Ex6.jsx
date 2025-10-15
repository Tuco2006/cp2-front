// Ex6 — Layout com Grid

// Crie um layout com cabeçalho, conteúdo principal e rodapé usando `grid`:


// - O Layout deve ter 20rem de altura total.
// - Cabeçalho ocupa 100% largura, 80px altura.
// - Conteúdo central ocupa o restante da tela.
// - Rodapé fixo embaixo (80px).

export default function Ex6() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex6 - Layout com Grid</h1>
      <div className="bg-gray-300 border-1 border-red-500
         text-2xl font-bold h-20rem w-100 shadow-3xl rounded-3xl">
          <h5 className="w-full bg-amber-200 mt-5 mb-4 h-80px">cabeçalho</h5>
          <p className="text-lg text-gray-700 mb-5">conteudo central aleatório</p>
          <h1 className="align-bottom p-3 bg-amber-200 rounded-3xl h-20px">rodapé</h1>
         </div>
    </div>
  );
}
