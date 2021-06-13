import React from 'react';
import Spinner from '../CustumComponents/spinner/spinner.component'

const WithSpinner =(WrapperComponent)=>({isLoading, ...otherProps})=>(
                        isLoading? 
                        ( <div style ={{margin: '0px auto',
                            width: '100px',
                            height: '125px'
                        }}> <Spinner/> </div>):
                        ( <WrapperComponent {...otherProps}/>
                    )
)

export default WithSpinner;