import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddPhots from './components/AddPhots';
import SearchPhotos from './components/SearchPhotos';
import DeletePhotos from './components/DeletePhotos';
import ViewPhotos from './components/ViewPhotos';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPhots/>}/>
        <Route path='/search' element={<SearchPhotos/>}/>
        <Route path='/delete' element={<DeletePhotos/>}/>
        <Route path='/view' element={<ViewPhotos/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
