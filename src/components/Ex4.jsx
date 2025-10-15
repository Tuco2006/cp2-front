// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex4 - Card Responsivo</h1>
        <div className="bg-black border-2 border-blue-500
         text-2xl font-bold shadow-3xl rounded-3xl grid grid-rows-3 p-5 lg:w-50 w-full ">
          <h4 className="text-5xl text-amber-300 mb-5">Card</h4>
          <p className="text-2x1 text-gray-100">description</p>
          <a className="text-2xl text-white bg-amber-700 border-2 p-4 w-25 hover:bg-amber-400 " href="#" class="link">more</a>
         </div>
    </div>
  );
}