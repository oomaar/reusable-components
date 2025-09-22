import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<div>Hello World</div>} />
        <Route path="/table" element={<div>Table</div>} />
        <Route path="/auto-select" element={<div>auto-select</div>} />
        <Route path="/media-upload" element={<div>media-upload</div>} />
      </Route>
    </Routes>
  );
}

export default App;
