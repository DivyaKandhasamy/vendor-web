import Sidebar from "./components/Sidebar";
import Routing from "./components/Routing";

function App() {
  return (
    <div className="flex h-full">
      <div className="sidebar-wrapper">
      <Sidebar />
      </div>
      <div className="content-wrapper">
        <Routing />
      </div>
    </div>
  );
}

export default App;
