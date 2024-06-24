import {Container} from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import Toolbar from './components/Toolbar/Toolbar';
import {useState} from 'react';
import {OURPOSTS} from './constants';
import {POST} from './types';

const App = () => {
  const [isAdmin,setIsAdmin] = useState<boolean>(false)
  const [allPosts,setAllPosts] = useState<POST[]>(OURPOSTS)

  return (
    <>


        <header>
          <Toolbar isAdmin={isAdmin} getAdmin={()=>setIsAdmin(!isAdmin)}/>
        </header>
        <Container>
          <Routes>
            <Route path="/"
                   element={
                     <Home posts={allPosts} isAdmin={isAdmin}/>
                   }/>
            <Route path="/products"
                   element={
                     <div/>
                   }/>
            <Route path="/about-us"
                   element={
                     <div/>
                   }/>
            <Route path="/contacts"
                   element={
                     <div/>
                   }/>

            <Route path="*"
                   element={
                     <h1>Not found</h1>}/>
          </Routes>
        </Container>



    </>
  );
};
export default App
