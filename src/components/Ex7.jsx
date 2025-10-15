// Ex7 — Dashboard simples com Grid (2 pontos)

// Considerando o layout abaixo, estilize com Tailwind:

// - O cabeçalho ocupa largura total (com título e botão “Logout” alinhados em extremidades).
// - O conteúdo é dividido em 2 colunas no desktop e 1 coluna no mobile.
// - Cada card deve ter borda, sombra e padding

export default function Ex7() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex7 - Dashboard Simples</h1>
      <header className="bg-gray-300 border-1 border-red-500
         text-2xl font-bold h-20rem w-100 shadow-3xl rounded-3xl grid grid-cols-2 items-center">
        <h1 classname="text-4xl">Meu Dashboard</h1>
        <button className="text-lg">Sair</button>
      </header> 
      <main className="grid lg:grid-cols-2 grid-cols-1">
        <div className="bg-gray-300 w-20 rounded-3xl shadow-md p-4">Card 1</div>
        <div className="bg-gray-300 w-20 rounded-3xl shadow-md p-4">Card 2</div>
        <div className="bg-gray-300 w-20 rounded-3xl shadow-md p-4">Card 3</div>
        <div className="bg-gray-300 w-20 rounded-3xl shadow-md p-4">Card 4</div>
      </main>
    </div>
  );
}
