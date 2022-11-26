import React, {Component} from "react";

import Count from "./Count";
import Button from "./Button";

class App extends Component{
    state = {
        counter: 0, 
    }

incrementCount = id =>{     // updating the state..incase the parameter is just one no need of() just jote
        console.log('was clicked');
        this.setState({     // use this.setState() method the pass in the new values of the state value by {}.
          counter: this.state.counter +id 
        })
    }

    render(){
    return(
        <div style={{textAlign: 'center'}}>
            <br/>
        <Count count={this.state.counter} /> 
            <br/>
        <Button incrementCount={this.incrementCount} value={1}/>
        <Button incrementCount={this.incrementCount} value={2}/>
        <Button incrementCount={this.incrementCount} value={5}/>
        <Button incrementCount={this.incrementCount} value={10}/>
        <Button incrementCount={this.incrementCount} value={20}/>
        <Button incrementCount={this.incrementCount} value={50}/>
        <Button incrementCount={this.incrementCount} value={100}/>
        
        </div>


    );
 };
}
 export default App;