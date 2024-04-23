import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Live from './Components/Live/Live';
import Push from './Components/Push/Push';
import Note from './Components/Note/Note';
import Link1 from './Components/Link/Link1';
import Shop from './Components/Shop/Shop';
import Packs from './Components/Packs/Packs';
import Help from './Components/Help/Help';
import More from './Components/More/More';
import LearnLive12 from './Components/LearnLive12/LearnLive12';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Live12 from './Components/Live/LiveComponents/Live12';
import AllNewFeatures from './Components/Live/LiveComponents/AllNewFeatures';
import WhatIsLive from './Components/Live/LiveComponents/WhatIsLive';
import MaxForLive from './Components/Live/LiveComponents/MaxForLive';
import LearnLive from './Components/Live/LiveComponents/LearnLive';
import IntegratedHardware from './Components/Live/LiveComponents/IntegratedHardware';
import CompareEditions from './Components/Live/LiveComponents/CompareEditions';
import BuyNow from './Components/Live/LiveComponents/BuyNow';
import OverView from './Components/Push/PushComponents/OverView'
import TechSpecs from './Components/Push/PushComponents/TechSpecs'
import LearnPush from './Components/Push/PushComponents/LearnPush'
import UpgradeKit from './Components/Push/PushComponents/UpgradeKit'
import WhatIsLink from './Components/Link/LinkComponents/WhatIsLink'
import LinkEnabledProducts from './Components/Link/LinkComponents/LinkEnabledProducts';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Live/" element={<Live />}>
            <Route path='Live12' element={<Live12 />} />
            <Route path='AllNewFeatures' element={<AllNewFeatures />} />
            <Route path='WhatIsLive' element={<WhatIsLive />} />
            <Route path='MaxForLive' element={<MaxForLive />} />
            <Route path='LearnLive' element={<LearnLive />} />
            <Route path='IntegratedHardware' element={<IntegratedHardware />} />
            <Route path='CompareEditions' element={<CompareEditions />} />
            <Route path='BuyNow' element={<BuyNow />} />
          </Route>
          <Route path="/Push/" element={<Push />}>
            <Route path='OverView' element={<OverView />} />
            <Route path='TechSpecs' element={<TechSpecs />} />
            <Route path='LearnPush' element={<LearnPush />} />
            <Route path='UpgradeKit' element={<UpgradeKit />} />
            <Route path='BuyNow' element={<BuyNow />} />
          </Route>
          <Route path="/Note" element={<Note />}></Route>
          <Route path='/Link1/' element={<Link1 />}>
            <Route path='WhatIsLink' element={<WhatIsLink />} />
            <Route path='LinkEnabledProducts' element={<LinkEnabledProducts />} />
          </Route>
          <Route path="/Shop/" element={<Shop />}>
            <Route path='OverView' element={<OverView />} />
            <Route path='Live' element={<Live12 />} />
            <Route path='Push' element={<LearnPush />} />
            <Route path='EducationalOffers' element={<CompareEditions />} />
            <Route path='MaxForLive' element={<MaxForLive />} />
            <Route path='MakingMusic' element={<LinkEnabledProducts />} />
            <Route path='Merchandise' element={<BuyNow />} />
          </Route>
          <Route path="/Packs" element={<Packs />}></Route>
          <Route path="/Help/" element={<Help />}>
            <Route path='OverView' element={<OverView/>} />
            <Route path='LearnLive' element={<LearnLive/>} />
            <Route path='LearnPush' element={<LearnPush/>} />
          </Route>
          <Route path="/More" element={<More />}></Route>
          <Route path="/Live12" element={<Live12 />}></Route>
          <Route path="/Login" element={<Login />}></Route>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
