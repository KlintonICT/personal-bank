import { Routes, Route } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path='/' element={<div>Bank Main</div>} />
      <Route path='/pin' element={<div>Pin</div>} />

      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
