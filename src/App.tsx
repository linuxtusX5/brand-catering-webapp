import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <main className="min-h-[calc(100vh-160px)]">
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
