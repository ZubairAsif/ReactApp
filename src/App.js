// import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact'
// import About from './components/About'
import JXS from './components/JsxComponent';
// import Contact from './components/Contact';
import Welcome from './components/ClassComponent';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
function App() {
  return (
    <div className="App">
      <EventBind/>
      <ParentComponent/>
      <UserGreeting/>
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        {/* <About/> */}
        {/* <Contact name="Zubair Asif" heroName="Saim">
          <p>This is first Heading</p>
        </Contact> */}
        {/* <Contact name="Hafiz Majid" heroName="Hafiz">
          <button>Action</button>
        </Contact> */}
        {/* <JXS /> */}
        {/* <Welcome /> */}
        {/* <Counter name="Zubair Asif Here"/> */}
    </div>
  );
}

export default App;
