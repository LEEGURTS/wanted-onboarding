import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import IndexPage from "./pages/IndexPage";
import ProtectedRoute from "./components/ProtectRoute/ProtectRoute";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute path="/todo" />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
        <Route element={<ProtectedRoute path="/signin" shouldLogin />}>
          <Route path="/todo" element={<div>TODO</div>} />
        </Route>

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
