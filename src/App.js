import './App.css';
import Home from './newApp/pages/Home';
// import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SignIn from './newApp/pages/SignIn';
import DashBoard from './newApp/pages/DashBoard';
import PageOne from './newApp/pages/PageOne';
import PageTwo from './newApp/pages/PageTwo';
import PageThree from './newApp/pages/PageTrhee';
import PageFour from './newApp/pages/PageFour';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/pageone" element={<PageOne />} />
          <Route path="/pageTwo" element={<PageTwo />} />
          <Route path="/pageThree" element={<PageThree />} />
          <Route path="/pageFour" element={<PageFour />} />


        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
