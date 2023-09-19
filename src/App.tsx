import AddBooks from "./components/AddBooks";
import Books from "./components/Books";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className=" min-h-[calc(100vh-120px)] max-w-7xl mx-auto mb-10 mt-5">
        <Books />
        <AddBooks />
      </div>
      <Footer />
    </div>
  );
}

export default App;
