import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import SampleChart from './components/userComponents/sampleChart';
import SampleTable from './components/userComponents/sampleTable';
import SampleOptionsTile from './components/userComponents/sampleOptionsTile';
import SampleTabbedPane from './components/userComponents/sampleTabbedPane';
import SampleForm from './components/userComponents/sampleForm';

ReactDOM.render(
    <BrowserRouter>
        <div>
                <Route path="/" component={App}/>   
                <Route path="/chart" component={SampleChart}/>  
                <Route path="/table" component={SampleTable}/>    
                <Route path="/tile" component={SampleOptionsTile}/>      
                <Route path="/tabbedPane" component={SampleTabbedPane}/>   
                <Route path="/form" component={SampleForm}/>  
        </div>       
    </BrowserRouter>
, document.querySelector('.root'));
