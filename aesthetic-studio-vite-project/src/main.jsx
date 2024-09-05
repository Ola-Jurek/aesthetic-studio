import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import {Route, Routes, HashRouter} from "react-router-dom";
import {About} from "./js/about.jsx";
import {PriceList} from "./js/price_list.jsx";
import {Contact} from "./js/contact.jsx";
import {Treatments} from "./js/treatments.jsx";
import {Cosmetics} from "./js/cosmetics.jsx";
import {TreatmentDepilacja} from "./js/treatment_1_depilacja.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
              <Route path='/' element={<App/>} />
              <Route path='/about' element={<About/>}/>
              <Route path='/price_list' element={<PriceList/>}/>
              <Route path='/treatments' element={<Treatments/>}/>
              <Route path='/treatment_depilacja' element={<TreatmentDepilacja/>}/>
              <Route path='/cosmetics' element={<Cosmetics/>}/>
              <Route path='/contact' element={<Contact/>}/>
          </Routes>
      </HashRouter>

  </React.StrictMode>
)
