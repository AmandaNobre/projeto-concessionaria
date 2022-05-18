import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
