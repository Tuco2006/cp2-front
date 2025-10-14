// Ex2 — Flexbox básico

// Crie um container com `flex` que alinhe três quadrados coloridos (50x50px) lado a lado e centralizados horizontalmente.

export default function Ex2() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex2 - Flexbox Básico</h1>
        <div className="flex flex-col-3 justify-center">
          <h1 className="text-sm bg-amber-600 rounded-2xl border-2 p-5 mr-4 ">quadrado 1</h1>
          <h1 className="text-sm  bg-pink-600 rounded-2xl border-2 p-5 mr-4">quadrado 2</h1>
          <h1 className="text-sm  bg-blue-600 rounded-2xl border-2 p-5 mr-4">quadrado 3</h1>
        </div>

    </div>
  );
}
