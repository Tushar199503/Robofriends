import React from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';



class App extends React.Component{
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield: ''
        }
    }

    OnSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
        console.log(event);
        
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox searchchange={this.OnSearchChange}/>
            <CardList robots ={filteredRobots}/>
            </div>
            );
        
        }
    }
export default App;