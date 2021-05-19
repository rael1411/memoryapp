import './App.css';
import Cards from "./components/Cards/Cards";
import Score from "./components/Score";
import Info from "./components/Info/Info";

function App() {
  return (
    <div>
      <Info />
      <Score />
      <Cards />
    </div>
  );
}

export default App;
