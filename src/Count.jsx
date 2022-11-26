import React from 'react';

const Count = ( props) => { // functional base component.
    let styles;

    if (props.count === 0) {
        styles = {
            color:'red'
        }
    }
        else if (props.count >= 1 && props.count <= 10) {
            styles ={
                color:'orange'
        }
        
    }
    else if (props.count >= 11 && props.count <= 50) {
        styles ={
            color:'green'  
    }
    
    }
    else if (props.count >= 51 && props.count <= 200) {
        styles ={
            color:'purple'
    }

    }
    else if (props.count >= 200 && props.count <= 2000) {
        styles ={
            color:'blue'
    }

    }
            return(
            <div>
                <h1 style={styles}>{props.count}</h1>
            </div>  
        );
};
export default Count;