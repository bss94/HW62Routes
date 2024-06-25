import {Container} from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import Toolbar from './components/Toolbar/Toolbar';
import {useState} from 'react';
import {CURRENTORDERS, OURPOSTS} from './constants';
import {ORDER, POST} from './types';
import FullPost from './components/Posts/FullPost/FullPost';
import AboutUs from './containers/AboutUs/AboutUs';
import Contacts from './containers/Contacts/Contacts';
import Products from './containers/Products/Products';
import Order from './components/Order/Order';
import AllOrders from './containers/AllOrders/AllOrders';

const App = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [allPosts, setAllPosts] = useState<POST[]>(OURPOSTS);
  const [orders,setOrders]=useState<ORDER[]>(CURRENTORDERS);
  const onOrderSubmit = (order:ORDER)=>{
    setOrders(prevState => [...prevState,order])
  }

  const addPost = (post: POST) => {
    setAllPosts(prevState => [...prevState, post]);
  };

  return (
    <>
      <header>
        <Toolbar isAdmin={isAdmin} getAdmin={() => setIsAdmin(!isAdmin)}/>
      </header>
      <Container>
        <Routes>
          <Route path="/"
                 element={
                   <Home posts={allPosts} addPost={addPost} isAdmin={isAdmin}/>
                 }/>
          {allPosts.map(post => {
            return <Route path={`/posts/${post.id}`}
                          element={
                            <FullPost title={post.title} subTitle={post.subTitle} body={post.body} image={post.image}/>
                          }
                          key={Math.random() * 100}/>;
          })}
          <Route path="/products"
                 element={
                   <Products/>
                 }/>
          <Route path="/about-us"
                 element={
                   <AboutUs/>
                 }/>
          <Route path="/orders"
                 element={
                   <AllOrders orders={orders}/>
                 }/>
          <Route path="/contacts"
                 element={
                   <Contacts/>
                 }>
            <Route path='new-order' element={<Order onOrderSubmit={onOrderSubmit}/>}/>
          </Route>

          <Route path="*"
                 element={
                   <h1>Not found</h1>}/>
        </Routes>
      </Container>
    </>
  );
};
export default App;
