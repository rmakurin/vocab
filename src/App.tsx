import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import NewWord from './NewWord.tsx';
import Home from './Home.tsx';

function App() {
  return <BrowserRouter basename="/vocab" >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-word" element={<NewWord />} />
    </Routes>
  </BrowserRouter>;
}

export default App
