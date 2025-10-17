// App.tsx
import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import { BlogPage } from "./pages/Blog/Blog";
import NotFound from "./pages/NotFound/NotFound";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { useTheme } from "./context/ThemeContext";
import { useEffect } from "react";


// Component to apply dark class to <html>
const ApplyTheme = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return null;
};

// Layout wrapper for pages with navbar/footer
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="h-screen overflow-y-auto bg-white dark:bg-black w-full transition-colors duration-300 flex flex-col">
    <Navbar />
    <main className="w-full">{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <>
      <ApplyTheme />
      <Routes>
        {/* Routes that use layout */}
        <Route
          path="/"
          element={
            <Layout>
              <Overview />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <BlogPage />
            </Layout>
          }
        />

        {/* NotFound route without layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
