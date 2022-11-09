import logo from './logo.svg';
import './App.css';
import Stylings from './Stylings';
import FuncComp from './Components/FuncComp';
import ClassComp from './Components/ClassComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListsandKeys from './Components/ListsandKeys';
import Users from './Components/Users';
import Pagination from './Components/Pagination/Pagination';

function App() {
  return (
    <div className="App">
      {/* <Stylings /> */}
      {/* <FuncComp courseName="ReactJs" courseDuration="3 Months" /> */}
      {/* <ClassComp /> */}
      {/* <ListsandKeys /> */}
      {/* <Users /> */}
      <Pagination />
    </div>
  );
}

export default App;
