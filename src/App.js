import "./App.css";
import "./layout/footer.css";
import Header from "./layout/header";
import Menu from "./layout/menu";
import Footer from "./layout/footer";
import Article from "./layout/article";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <Menu />
        <Article />
      </div>
      <Footer />
    </div>
  );
}

export default App;
