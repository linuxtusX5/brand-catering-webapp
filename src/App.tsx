import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-160px)]">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
