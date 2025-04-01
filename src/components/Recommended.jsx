import { motion } from "framer-motion";

const items = [
  { id: 1, name: "Cheeseburger", price: "R$ 20,00", image: "/burger1.jpg" },
  { id: 2, name: "Duplo Bacon", price: "R$ 25,00", image: "/burger2.jpg" },
  { id: 3, name: "Vegano", price: "R$ 22,00", image: "/burger3.jpg" },
];

export default function Recommended() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Recomendado</h2>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="bg-gray-800 p-4 rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-md" />
            <p className="mt-2 font-semibold">{item.name}</p>
            <span className="text-sm text-gray-400">{item.price}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
