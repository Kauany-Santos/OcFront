import { Search, ShoppingCart, CreditCard } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <span className="text-lg font-bold">COMANDA Nº00</span>
      <div className="flex gap-4">
        <Search className="w-6 h-6 cursor-pointer" />
        <ShoppingCart className="w-6 h-6 cursor-pointer" />
        <CreditCard className="w-6 h-6 cursor-pointer" />
      </div>
    </header>
  );
}
