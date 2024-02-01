
import './App.css';
import StateTutorial from './components/StateTutorial';
import ReducerTutorial from './components/ReducerTutorial';
import EffectTutorial from './components/EffectTutorial';
import RefTutorial from './components/RefTutorial';
import LayoutEffecTutorial from './components/LayoutEffecTutorial';
import ImperativeHandle from './components/ImperativeHandle';
function App() {
  return (
    <div className="App">

      { /* <h3>useState</h3>*
      <StateTutorial />
      <hr />
      <h3>useReducer</h3>
      <ReducerTutorial />
  <hr />*/ }
      <h3>useEffect</h3>
      <EffectTutorial />
      <hr />
      <h3>useRef</h3>
      <RefTutorial />
      <hr />
      <h3>useLayoutEffect</h3>
      <LayoutEffecTutorial />
      <hr />
      <h3>useLayoutEffect</h3>
      <ImperativeHandle />
    </div>
  );
}

export default App;
