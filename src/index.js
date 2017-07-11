import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import SampleChart from './components/userComponents/sampleChart';
import SampleTable from './components/userComponents/sampleTable';
import SampleOptionsTile from './components/userComponents/sampleOptionsTile';
import SampleTabbedPane from './components/userComponents/sampleTabbedPane';
import SampleForm from './components/userComponents/sampleForm';
import Rectangle from './components/userComponents/Rectangle';
import NavBar from './components/userComponents/NavBar';
import Inventory from './components/userComponents/inventory';

ReactDOM.render(
    <BrowserRouter>
        <div>
                <Route path="/" component={App}/>   
                <Route path="/chart" component={SampleChart}/>  
                <Route path="/table" component={SampleTable}/>    
                <Route path="/tile" component={SampleOptionsTile}/>      
                <Route path="/tabbedPane" component={SampleTabbedPane}/>   
                <Route path="/form" component={SampleForm}/>  
                <Route path="/1" component={Rectangle}/>
                <Route path="/2" exact component={NavBar} />

                <Route path="/shopping" component={Inventory} />
        </div>       
    </BrowserRouter>
, document.querySelector('.root'));
