import React from 'react'
import Item from './Item'
import data from './data'

function App() {
  const itemComponent = data.map(emp => 
    <Item 
      key = {emp.key}
      item = {emp}
    />
    )
  return (
    <div className="root">
      {itemComponent}
    </div>
  );
}

export default App;
