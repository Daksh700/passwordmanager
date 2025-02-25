import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"; 
import Home from "./pages/home";
import Login from "./pages/login";
import PasswordVault from "./pages/passwordvault";
import PasswordGenerate from "./pages/generatepassword";


function App() {
  return (
    <GoogleOAuthProvider clientId="163347937921-01e9n4h35ur90tua7aejtsunoa2uubgl.apps.googleusercontent.com"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passwordvault" element={<PasswordVault/>} />
          <Route path="/generatepassword" element={<PasswordGenerate/>} /> 
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;