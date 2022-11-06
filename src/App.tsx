import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header";
import Layout from "./components/Layout";
import './App.css';
import EventsMain from "./Events/eventsMain";
import EventPage from "./Events/eventPage/eventPage";
import CryptocurrenciesMain from "./cryptocurrenciesPage/cryptocurrenciesMain";
import Index from "./landingPage";
import Admin from "./admin/admin";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes >
            <Route path="/" element={<Layout/>}>
                <Route index element={<CryptocurrenciesMain />}></Route>
                <Route path="Cryptocurrencies" element={<CryptocurrenciesMain />}></Route>
                <Route path="Gram_talks" element={<div>Gram Talks</div>}></Route>
                <Route path="events" element={<EventsMain />}></Route>
                <Route path="events/:name/:id" element={<EventPage />}></Route>
                <Route path='/admin' element={<Admin />}></Route>
            </Route>

        </Routes>
    </div>
  );
}

export default App;
