import { BrowserRouter as Router } from "react-router-dom";
import RouterConfig from "./router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <RouterConfig />
    </Router>
  );
}

export default App;
