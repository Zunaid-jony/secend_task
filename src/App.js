
import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import Table from "./Table/Table";
import Task3 from './Task3/Task3';
import Post from "./Table/Post";
import Delete from "./Table/Delete";

function App() {
  return (
    <div className="App">
      <Table></Table>

      <Task3></Task3>
      <Post></Post>
      <Delete></Delete>
    </div>
  );
}

export default App;
