
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
//import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import NewPost from './NewPost';
import Nav from './Nav';
import PostPage from './PostPage';
import Missing from './Missing';
import { useState, useEffect } from 'react';

function App() {
const [posts, setPosts] = useState([
  {
    id: 1,
    title: "My First Post",
    datetime: 'may 20, 2022 11:17:36AM',
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 2,
    title: "My 2nd Post",
    datetime: 'may 20, 2022 11:17:36AM',
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 3,
    title: "My 3ed Post",
    datetime: 'may 20, 2022 11:17:36AM',
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 4,
    title: "My 4th Post",
    datetime: 'may 20, 2022 11:17:36AM',
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
])
  const [ search, setSearch ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);

  const handleDelete = (id) => {

  }

  return (
    <div className="App">
      <Header title={'React.js Blog'} />
      <Nav search={search} setSearch={setSearch}/>
      <Router>
        <Routes>
          <Route path="/" element={<Home posts={posts}/>} />
        </Routes>
      <Routes>
        <Route path="/post" element={<NewPost />} />
      </Routes>
        <Routes>
          <Route path="/post" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
          <Route path="/" element={<About />} />
          <Route path="#" element={<Missing />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;

  