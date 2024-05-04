
import './App.css';
import StateTutorial from './components/StateTutorial';
import ReducerTutorial from './components/ReducerTutorial';
import EffectTutorial from './components/EffectTutorial';
import RefTutorial from './components/RefTutorial';
import LayoutEffecTutorial from './components/LayoutEffecTutorial';
import ImperativeHandle from './components/ImperativeHandle';
import ContextTutorial from './components/ContextTutorial';
import MemoTutorial from './components/MemoTutorial';
import CallbackTutorial from './components/CallbackTutorial';
import Main from './showListContext/Main';
function App() {
  return (
    <div className="App">

      { /* <h3>useState</h3>*
      <StateTutorial />
      <hr />
      <h3>useReducer</h3>
      <ReducerTutorial />
  <hr />
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
      <hr />
      <h3>useContext</h3>
      <ContextTutorial />
      <hr />
      <h3>useMemo</h3>
      <MemoTutorial />
      <hr />
      <h3>useCallback</h3>
      <CallbackTutorial />
      */ }
      <Main/>
    </div>
  );
}

export default App;
