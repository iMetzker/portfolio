import '../src/styles/global.scss'

import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export function App() {
  return (
    <div className="App">
      
      <Header />
      <Home />
    </div>
  );
}
