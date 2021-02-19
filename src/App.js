import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import { useStateValue } from "./Providers/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
