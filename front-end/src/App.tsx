import { BrowserRouter } from "react-router-dom";
import { BasePages } from "./basePages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BasePages />
      </BrowserRouter>
    </div>
  );
}

export default App;
