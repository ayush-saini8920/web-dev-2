import React, { Component } from 'react'

function Sample({count , setCount}){
    
    return (
        <div>
      <h2>Treading topics</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, vero.        
      </p>
      <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
          >
          Count is {count}
        </button>
    </div>
  )
}

class Sample extends Component{
    constructor (props){
        super(props)
    }
    render(){
        return (
            <div>

             <h2>Treading Topics</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, vero. lorem ipsim        
      </p>
      <button
          className="counters"
          onClick={() => setCount((count) => count + 1)}
          >
          Count is {count}
        </button>
              </div>
        )
    }
}

export default Sample
    
    


