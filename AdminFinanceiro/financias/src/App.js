import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/dashboard/DashboardPage'
import ExpensesPage from './pages/expenses/ExpensesPage'
import IncomesPage from './pages/incomes/IncomesPage'
import RegisterPage from './pages/register/RegisterPage'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<DashboardPage/>} />
          <Route path='/expenses' element={<ExpensesPage/>} />
          <Route path='/incomes' element={<IncomesPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
