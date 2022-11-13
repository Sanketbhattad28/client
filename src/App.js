import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StreamCreate from "./components/Streams/StreamCreate";
import StreamDelete from "./components/Streams/StreamDelete";
import StreamEdit from "./components/Streams/StreamEdit";
import StreamList from "./components/Streams/StreamList";
import StreamShow from "./components/Streams/StreamShow";
import Header from "./components/Header";
//import { createBrowserHistory } from "history";
//let history = createBrowserHistory();

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StreamList />}></Route>
          <Route path="/streams/new" element={<StreamCreate />}></Route>
          <Route path="/streams/edit/:id" element={<StreamEdit />}></Route>
          <Route path="/streams/delete/:id" element={<StreamDelete />}></Route>
          <Route path="/streams/:id" element={<StreamShow />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
