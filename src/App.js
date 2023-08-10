import "./App.css";
import "./layout/footer.css";
import Header from "./layout/header";
import Menu from "./layout/menu";
import Footer from "./layout/footer";
import Inputbutton from "./layout/article";
import Protocol from "./layout/protocol";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <Menu />
        <Inputbutton />
        <Protocol />
      </div>
      <Footer />
    </div>
  );
}

export default App;
