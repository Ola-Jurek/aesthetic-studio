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
import {StartPage} from "./js/start_page.jsx";
import {TreatmentBlizny} from "./js/treatment_2_blizny_i_rozstepy.jsx";
import {TreatmentLipoliza} from "./js/treatment_3_lipoliza_iniekcyjna.jsx";
import {TreatmentRadiofrekwencja} from "./js/treatment_4_radiofrekwencja_mikroiglowa.jsx";
import {TreatmentUsuwanieTatuazy} from "./js/treatment_5_usuwanie_tatuazy.jsx";
import {TreatmentOczyszczanieWodorowe} from "./js/treatment_17_oczyszczanie_wodorowe.jsx";
import {TreatmentPeelingKawitacyjny} from "./js/treatment_18_peeling_kawitacyjny.jsx";
import {TreatmentPeelingWeglowy} from "./js/treatment_19_peeling_weglowy.jsx";
import {TreatmentPeelingChemiczny} from "./js/treatment_20_peeling_chemiczny.jsx";
import {TreatmentTerapiaTradziku} from "./js/treatment_21_terapia_tradziku.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
              <Route path='/' element={<App/>} />
              <Route path='/about' element={<About/>}/>
              <Route path='/price_list' element={<PriceList/>}/>
              <Route path='/treatments' element={<Treatments/>}/>
              <Route path='/treatment_depilacja' element={<TreatmentDepilacja/>}/>
              <Route path='/treatment_blizny_i_rozstepy' element={<TreatmentBlizny/>}/>
              <Route path='/treatment_lipoliza_iniekcyjna' element={<TreatmentLipoliza/>}/>
              <Route path='/treatment_radiofrekwencja_mikroiglowa' element={<TreatmentRadiofrekwencja/>}/>
              <Route path='/treatment_usuwamie_tatuazy' element={<TreatmentUsuwanieTatuazy/>}/>
              <Route path='/treatment_rewitalizacja_skory_dloni' element={<TreatmentUsuwanieTatuazy/>}/>
              <Route path='/treatment_makijaz_permanentny' element={<TreatmentUsuwanieTatuazy/>}/>
              <Route path='/treatment_henna_pudrowa' element={<TreatmentUsuwanieTatuazy/>}/>
              <Route path='/treatment_mezoterapia-iglowa' element={<TreatmentUsuwanieTatuazy/>}/>
              <Route path='/treatment_mezoterapia_mikroiglowa' element={<TreatmentUsuwanieTatuazy/>}/>
              <Route path='/treatment_osocze_bogatoplytkowe' element={<TreatmentUsuwanieTatuazy/>}/>
              <Route path='/treatment_radiofrekwencja_mikroiglowa' element={<TreatmentUsuwanieTatuazy/>}/>
              <Route path='/treatment_radiofrekwencja_beziglowa' element={<TreatmentUsuwanieTatuazy/>}/>
              <Route path='/treatment_modelowanie_ust' element={<TreatmentUsuwanieTatuazy/>}/>
              <Route path='/treatment_mezoterapia_iglowa_skory_glowy' element={<TreatmentUsuwanieTatuazy/>}/>
              <Route path='/treatment_oczyszczanie_wodorowe' element={<TreatmentOczyszczanieWodorowe/>}/>
              <Route path='/treatment_peeling_kawitacyjny' element={<TreatmentPeelingKawitacyjny/>}/>
              <Route path='/treatment_peeling_weglowy' element={<TreatmentPeelingWeglowy/>}/>
              <Route path='/treatment_peeling_chemiczny' element={<TreatmentPeelingChemiczny/>}/>
              <Route path='/treatment_terapia_tradziku' element={<TreatmentTerapiaTradziku/>}/>
              <Route path='/cosmetics' element={<Cosmetics/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/start_page' element={<StartPage/>}/>
          </Routes>
      </HashRouter>

  </React.StrictMode>
)
