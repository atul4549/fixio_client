import { lazy, Suspense } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import { Loader } from "./components/Loader";

const Home = lazy(() =>
  import("./page/Home").then((module) => ({ default: module.Home }))
);
// import { Home } from "./page/Home";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      {/* <div className="App"> */}
          <Suspense fallback={<Loader />}>
        <Routes>
          {/* <div> */}

            <Route path="/" element={<Home />} />
          {/* </div> */}
        </Routes>
          </Suspense>
      {/* </div> */}
    </Router>
  );
}

export default App;

// import './Loader.css';
