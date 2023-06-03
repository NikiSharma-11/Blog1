
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Nav from './components/Nav';
import LogIn from './pages/LogIn';
import AddCategory from './pages/AddCategory';
import DisplayCategory from './pages/DisplayCategory';
import UpdateCategory from './pages/UpdateCategory';
import AddBlog from './pages/AddBlog';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav/>}>
      <Route index element={<Home/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/logIn" element={<LogIn/>}/>
      <Route path="/addCategory" element={<AddCategory/>}/>
      <Route path="/displayAllCategory" element={<DisplayCategory/>}/>
      <Route path="/updateCategory/:id" element={<UpdateCategory/>}/>
      <Route path="/addBlog" element={<AddBlog/>}/>
    </Route>
  )
)

function App() {

  return (
    <>
    <RouterProvider router={router} />

    </>
    
  );
}

export default App;
