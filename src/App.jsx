import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import horror from './data/horror.json'
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import { Container, Row } from "react-bootstrap";
import AllTheBooks from "./components/AllTheBooks";
import MyAllert from "./components/MyAllert";
import fantasyBokks from "./data/fantasy.json";


function App() {
  return (
    <div id="App">
      <header>
        <MyNavBar />
      </header>
      <main>
        <div className="m-5">
          <MyAllert />
        </div>
        <Container>
          <Row
            className="my-3 row-cols-1 row-cols-md-3 row-cols-lg-4
          g-4"
          >
            <AllTheBooks books={fantasyBokks} />
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
