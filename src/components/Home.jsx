import Sidebar from "src/components/Sidebar.jsx";
import Header from "src/components/Header.jsx";
import Carousel from "src/components/Carousel.jsx";
import Recommended from "src/components/Recommended.jsx";

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
