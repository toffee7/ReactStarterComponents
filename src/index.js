import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import DataFlowContainer from './components/linkageComponents/dataFlowContainer';
import SampleChart from './components/userComponents/sampleChart';
import SampleTable from './components/userComponents/sampleTable';
import SampleOptionsTile from './components/userComponents/sampleOptionsTile';
import SampleTabbedPane from './components/userComponents/sampleTabbedPane';
import SampleForm from './components/userComponents/sampleForm';
import Inventory from './components/userComponents/inventory';
import Message from './components/userComponents/message';

ReactDOM.render(
    <BrowserRouter>
        <div>
                <Route path="/" component={App}/>   
                <Route path="/chart" component={SampleChart}/>  
                <Route path="/table" component={SampleTable}/>    
                <Route path="/tile" component={SampleOptionsTile}/>      
                <Route path="/tabbedPane" component={SampleTabbedPane}/>   
                <Route path="/form" component={SampleForm}/>                  
                <Route path="/dataflow" component={DataFlowContainer} />
                <Route path="/shopping" component={Inventory} />
                <Route path="/tanushree" component={Message} />
        </div>       
    </BrowserRouter>
, document.querySelector('.root'));
