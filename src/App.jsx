import React, { useState } from "react";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import { Route, Routes } from "react-router-dom";
import { Thanks } from "./pages/Thanks";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    collegeName: "",
    ageGroup: "",
    higherStudies: "",
    shareForward: "",
    rateProduct: "",
    feedback: "",
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage user={user} setUser={setUser} />} />
        <Route
          path="/next"
          element={<SecondPage user={user} setUser={setUser} />}
        />
        <Route path="/thanks" element={<Thanks user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
