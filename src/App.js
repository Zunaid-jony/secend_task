
import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import Table from "./Table/Table";
import Task3 from './Task3/Task3';

function App() {
  return (
    <div className="App">
      <Table></Table>

      <Task3></Task3>
    </div>
  );
}

export default App;
