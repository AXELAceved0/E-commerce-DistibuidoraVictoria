import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import HomePage from './components/homepage/HomePage'
import LoginPages from './components/header/pages/LoginPages'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
        <Route
        path='/login' 
        element={<LoginPages />} 
        />
        <Route
        path='*'
        element={
          <>
          <Header />
          < HomePage />
          </>
        } 
        />
        </Routes>
      </BrowserRouter>
  )
}

export default App
