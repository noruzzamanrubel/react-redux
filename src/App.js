import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import Counter from './components/counter';
// import Counter2 from './components/counter2';
import Todos from './components/todos';
import CounterView from './features/counter/counterView';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
  return (
    // <div className="App">
    //   <h1>Welcome to react redux</h1>
    //   {/* <Counter /> */}
    //   {/* <Counter2 /> */}
    //   <Todos />
    // </div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/todo' element={<Todos />} />
        {/* <Route path='/counterview' element={<CounterView />} /> */}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
