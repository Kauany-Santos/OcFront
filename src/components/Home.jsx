import Sidebar from "./Sidebar";
import Header from "./Header";
import Carousel from "./Carousel";
import Recommended from "./Recommended";

export default function Home() {
  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header />
        <Carousel />
        <Recommended />
      </main>
    </div>
  );
}
