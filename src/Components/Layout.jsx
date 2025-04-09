import Navbar from "./Navbar";
//import Footer from "./Footer"; // kalau belum ada, bisa skip dulu

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
