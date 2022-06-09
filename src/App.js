
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
                      import { format } from 'date-fns';


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: 'May 20, 2022 11:17:36AM',
      body: "To use any of these hooks, we must first import them from the react-router-dom package and then specify a variable that invokes the hook; we'll go through this in more detail in the sections that follow.."
    },
      {
        id: 2,
        title: "My 2nd Post",
        datetime: 'May 20, 2022 11:17:36AM',
        body: "To use any of these hooks, we must first import them from the react-router-dom package and then specify a variable that invokes the hook; we'll go through this in more detail in the sections that follow."
      },
        {
          id: 3,
          title: "My 3rd Post",
          datetime: 'May 20, 2022 11:17:36AM',
          body: "To use any of these hooks, we must first import them from the react-router-dom package and then specify a variable that invokes the hook; we'll go through this in more detail in the sections that follow.."
        },
          {
            id: 4,
            title: "My 4th Post",
            datetime: 'May 20, 2022 11:17:36AM',
            body: "To use any of these hooks, we must first import them from the react-router-dom package and then specify a variable that invokes the hook; we'll go through this in more detail in the sections that follow."
          }
  ])
  const [ search, setSearch ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);
  const [ postTitle, setPostTitle ] = useState('');
  const [ postBody, setPostBody ] = useState('');
  //const navigate = useNavigate();

  useEffect(() =>{
    const filteredResults = posts.filter(post =>
      ((post.body).toLowerCase()).includes(search.toLocaleLowerCase())
    ||((post.title).toLowerCase()).includes(search.toLocaleLowerCase()))

    setSearchResults(filteredResults.reverse());
  },[posts, search])


  const handleSubmit = (e) =>{
    e.preventDefult();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle(''); 
    setPostBody('');
    //navigate("/")
  }

  const handleDelete = (id) => {
/*     const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate("/"); */
  }


  return (
    <div className="App">
      <Header title='React.js Blog' />
      <Nav search={search} setSearch={setSearch}/>
      <Router>
        <Routes>
          <Route path="/" element={<Home posts={searchResults}/>} />
        </Routes>
        <Routes>
          <Route path="/post" element={<NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
          />} />
        </Routes>
        <Routes>
          <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
        </Routes>
        <Routes>  
          <Route path="/about" element={<About />} />
          <Route path="#" element={<Missing />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;

  