import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Main from "./components/Main/Main";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<Main/>}/>
        <Route exact path = "/share" element = {<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}
