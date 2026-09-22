// import './App.css';
import Search from "./Search.jsx";

function App() {
  let handlebtn=()=>{
    console.log("btn clicked !");
  }
  return (
    <>
      <h3>Weather Finder</h3>
      <Search/>
    </>
  );
}

export default App
