import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Is Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Is Enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        home="Home"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              showAlert={showAlert}
              heading="Enter your text"
              mode={mode}
            />  
          }
        />
        <Route exact path="/about-us" element={<AboutUs mode={mode} />} />
      </Routes>
    </Router>
  );
}
export default App;

// function App() {
//   return (
//     <Routes>
//       <Route exact path="/" element={<Home />} />
//     </Routes>
//   );
// }
// export default App;
