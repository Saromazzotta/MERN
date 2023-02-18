import './App.css';
import Person from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <Person firstName="Jane" lastName='Doe' personAge={45} hairColor={"Black"} />
      <Person firstName="John" lastName='Smith' personAge={88} hairColor={"Brown"} />
      <Person firstName="Millard" lastName='Fillmore' personAge={50} hairColor={"Brown"} />
      <Person firstName="Maria" lastName='Smith' personAge={62} hairColor={"Brown"} />
    </div>
  );
}

export default App;
