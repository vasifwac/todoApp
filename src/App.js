import "./App.css";
import Home from "./newApp/pages/Home";
// import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./newApp/pages/SignIn";
import DashBoard from "./newApp/pages/DashBoard";
import PageOne from "./newApp/pages/PageOne";
import PageTwo from "./newApp/pages/PageTwo";
import PageThree from "./newApp/pages/PageTrhee";
import PageFour from "./newApp/pages/PageFour";

function App() {
  const data = [
    { path: "/", element: Home },
    { path: "/signIn", element: SignIn },
    { path: "/dashboard", element: DashBoard },
    { path: "/pageone", element: PageOne },
    { path: "/pageTwo", element: PageTwo },
    { path: "/pageThree", element: PageThree },
    { path: "/pageFour", element: PageFour },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          {data.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              element={<route.element />}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
