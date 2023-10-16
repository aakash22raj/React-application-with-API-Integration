import { Outlet } from "react-router-dom";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
