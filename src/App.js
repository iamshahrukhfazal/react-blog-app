import logo from './logo.svg';
import './App.css';
import {Nav} from "./components/nav"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'  
import {ShowPost} from "./pages/postShow"
import {PostPage} from "./pages/postsPage"

function App() {           
 
 
  return (
 
      <Router>
        <div className="App">   

          {/* Show all the posts */}
          <div className='mx-3'>
            <Nav/>
            <div className='mt-4'></div>  
            <div className='flex justify-center flex-col items-center space-y-4'>
              <Routes>
                <Route path="/" element={<PostPage/>}/>
                <Route path="/test" element={<Test/>}>

              </Route>
            </ Routes>
            </div>
          </div>
        </div>
      </Router>

  );
}

export default App;
