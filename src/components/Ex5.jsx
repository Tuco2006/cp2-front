// Ex5 — Navbar responsiva

// Crie uma barra de navegação horizontal com 3 links.

// - Em telas grandes, os links devem aparecer em linha.
// - Em telas pequenas, os links devem aparecer empilhados.

export default function Ex5() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex5 - Navbar Responsiva</h1>
      <div className="bg-black border-2 border-blue-500
         text-2xl font-bold w-100 shadow-3xl rounded-3xl grid md:grid-cols-3 gap-5 p-5">
          <a href="#" className="text-white hover:underline transform">Link1</a>
          <a href="#" className="text-white hover:underline transform">Link2</a>
          <a href="#" className="text-white hover:underline transform">Link3</a>
         </div>
    </div>
  );
}