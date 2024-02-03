import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import {Provider} from 'react-redux';
import store from './Utils/Store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import VideoContainer from './Components/VideoContainer';
import WatchPage from './Components/WatchPage';


const routes = createBrowserRouter([
  {path:"/",element:<Body />,children:[{path:"youtube-app",element: <VideoContainer />},{path:"/watch",element:<WatchPage />}]},


])

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={routes}/>
    {
      /*
      Header
       -icon
       -searchbar
       -profile
      Body
       -buttonlist
       -Video container
        -video card
      Sidebar
       -sections  
      */ 
    }
    </Provider>
  );
}

export default App;
