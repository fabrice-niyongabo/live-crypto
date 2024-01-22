import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/home";
import Header from "./components/header";
import Details from "./pages/details";

function App() {
  useEffect(() => {
    // subscribeToSocket(store);
    // return () => {
    //   unSubscribeToSocket();
    // };
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
