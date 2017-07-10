import React from 'react';

const CustomHeader = (props) => {
    return (            
                
                <div className="row">	
                   
                    <div className="col-lg-6">
                        <h4>{props.title}</h4>
                    </div>

                     <div className="col-lg-3">			
                        <span className="float-right">ICON 
                        </span>       		
                        
                    </div>
            	</div>
                
            
        );
};

export default CustomHeader;