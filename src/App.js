
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout';
import Home from './Home';
import About from './About';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import EditPost from './EditPost';
import { DataProvider } from './context/DataContext';


function App() {
  
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="post">
          <Route index element={<NewPost/>}/>
        <Route path="/post/:id" element={<PostPage/>} />
        <Route path="edit/:id"  element={<EditPost/>}/>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;

  