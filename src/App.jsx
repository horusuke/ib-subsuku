import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import LP from './component/LP';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/ib-subsuku/" element={<LP />} />
      </Routes>
    </Router>

  )
}

export default App
