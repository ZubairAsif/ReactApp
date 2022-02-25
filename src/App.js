// import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact'
// import About from './components/About'
import JXS from './components/JsxComponent';
// import Contact from './components/Contact';
import Welcome from './components/ClassComponent';
function App() {
  return (
    <div className="App">
        {/* <About/> */}
        <Contact name="Zubair Asif" heroName="Saim">
          <p>This is first Heading</p>
        </Contact>
        <Contact name="Hafiz Majid" heroName="Hafiz">
          <button>Action</button>
        </Contact>
        <Contact name="Ahmad Butt" heroName="Butt"/>
        <Welcome name="Zubair Asif" heroName="Saim"/>
        <Welcome name="Hafiz Majid" heroName="Hafiz"/>
        <Welcome name="Ahmad Butt" heroName="Butt"/>
        <JXS />
    </div>
  );
}

export default App;
