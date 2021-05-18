import './App.css';
import './toDO/ToDoList'

const App = () => {
  return (
      <div className={"App"}>
          <Header/>
         <ul>
             <li>1</li>
             <li>2</li>
             <li>3</li>
         </ul>
      </div>
  );
};

const Header = () => {

    return (
    <div>
        <h1>From header</h1>
    </div>);
};


export default App;
