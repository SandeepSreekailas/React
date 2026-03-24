import React from 'react'


//Rendering lists
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


function Products() {

    const listitems= products.map(prod => 
        <li key={prod.id}
        style={{color :prod.isFruit ? 'red':'blue'}}
        >
            {prod.title}

        </li>
    )
  return (
    <ul>{listitems}</ul>
    
  )
}

export default Products