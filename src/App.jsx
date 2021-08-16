import Sidebar from "./components/Sidebar.jsx";
import Mainframe from "./components/Mainframe.jsx";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Mainframe />
    </div>
  );
};

export default App;
