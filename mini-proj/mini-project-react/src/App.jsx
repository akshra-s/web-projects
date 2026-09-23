// import './App.css';
import "./Search.css";
import Search from "./Search.jsx";
import Infobox from "./Infobox.jsx";

function App() {
  let handlebtn=()=>{
    console.log("btn clicked !");
  }
  return (
    <>
      <h3>Weather Finder &#128269;</h3>
      <Search/>
      <Infobox/>
    </>
  );
}

export default App
