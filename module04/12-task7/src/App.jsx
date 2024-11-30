import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import BackgroundChanger from './components/BackgroundChanger';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import NameFilter from './components/NameFilter';
import RegistrationForm from './components/RegistrationForm';
import PostList from './components/PostList';
import Gallery from './components/Gallery';
import CountdownTimer from './components/CountdownTimer';
import TabsComponent from './components/TabsComponent';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/timer" element={<Timer />} />
          <Route path="/background-changer" element={<BackgroundChanger />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/name-filter" element={<NameFilter />} />
          <Route path="/registration-form" element={<RegistrationForm />} />
          <Route path="/post-list" element={<PostList />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/countdown-timer" element={<CountdownTimer />} />
          <Route path="/tabs" element={<TabsComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
