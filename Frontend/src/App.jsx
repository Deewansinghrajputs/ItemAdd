
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AddItem from './pages/AddItem';
// import ViewItems from './pages/ViewItems';

// function App() {
//   return (
//     <BrowserRouter>
//   <Routes>
//   <Route path="/" element={<AddItem />} />         {/* Yeh default ho gaya */}
//   <Route path="/view" element={<ViewItems />} />
//   </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AddItem from './pages/AddItem';
import ViewItems from './pages/ViewItems';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ViewItems />} />
          <Route path="add" element={<AddItem />} />
          <Route path="view" element={<ViewItems />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
