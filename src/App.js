import './App.css';
import { useSelector , useDispatch } from 'react-redux';
import fetchUser from './Components/Users/UsersThunk';
import { useEffect } from 'react';

function App() {
 
  const dispatch = useDispatch() ;
 const users = useSelector((state) => state.userData.userData)
   
  useEffect(() => { // component did mount
    dispatch(fetchUser())
  }, [])


  return (
    <div className="App">
    <ul>
    {users && users.map((item,index) => 
      <li>{item.login}</li>
    )}</ul>   
    </div>
  );
}

export default App;
