export default function Sidebar() {
    return (
      <aside className="w-1/6 bg-gray-900 p-4 flex flex-col gap-4">
        <div className="h-16 bg-gray-800 flex items-center justify-center">LOGO</div>
        <nav className="flex flex-col gap-3">
          <button className="p-2 hover:bg-gray-700">⭐ Destaques</button>
          <button className="p-2 hover:bg-gray-700">🍔 Principal</button>
          <button className="p-2 hover:bg-gray-700">🥤 Bebidas</button>
          <button className="p-2 hover:bg-gray-700">🍰 Sobremesa</button>
          <button className="p-2 hover:bg-gray-700">🍽️ Entrada</button>
          <button className="p-2 hover:bg-gray-700">ℹ️ Sobre</button>
          <button className="p-2 hover:bg-gray-700">⭐ Avaliar</button>
        </nav>
      </aside>
    );
  }
  