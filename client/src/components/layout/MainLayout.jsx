import { Outlet } from "react-router-dom";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />

      <main className="min-h-[80vh] w-full bg-black">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;