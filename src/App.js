import Home from "./Dashboard/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Schools from "./Schools/Schools";
import Invoices from "./Schools/Invoices";
import Collections from "./Schools/Collections";
import SchoolDetails from "./Schools/SchoolDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school" element={<Schools />} />
          <Route path="/school/:schoolId" element={<SchoolDetails />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/collections" element={<Collections />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
