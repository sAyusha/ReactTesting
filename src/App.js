// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Notes from './components/Note';
import Skills from './components/Skills';

function App() {
  const skills = [
    { id: 1, name: "plumbing" },
    { id: 2, name: "wiring" },
    { id: 3, name: "painting" }
  ]
  const handleDelete = () => {
    alert(`delete this`)
  }
  return (
    <div className="App">
      <h1> Learn React </h1>
        <Skills skills={skills} />
      {/* <Counter/> */}
      <Notes handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
