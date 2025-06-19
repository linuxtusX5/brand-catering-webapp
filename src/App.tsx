import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ScrollToTop />
      <main className="min-h-[calc(100vh-160px)]">
        <AppRoutes />

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </main>
    </>
  );
}

export default App;
