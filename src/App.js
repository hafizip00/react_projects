import './App.css';
import ShowBirthday from './Birthaday_App/ShowBirthday';
import {useSelector, useDispatch} from 'react-redux'
import Login from './Feature/Login';

function App() {

  // const count = useSelector(state => state.count)
  // const increament = () =>{
  //   console.log('INC');
  //   dispatch({type : 'INC'});
  // }

  // const decrement = () =>{
  //   console.log('DEC');
  //   dispatch({type : 'DEC'});
  // }

  // const addBy = () =>{
  //   dispatch({type : 'ADD' , payload : 10})
  // }

  // const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <ShowBirthday/> */}
      {/* <h1>Counter</h1>
      <h1>{count}</h1>
      <h1><button onClick={increament}>Increament</button></h1>
      <h1><button onClick={decrement}>Decrement</button></h1>
      <h1><button onClick={addBy}>ADD BY</button></h1> */}
<Login/>



    </div>
  );
}

export default App;
