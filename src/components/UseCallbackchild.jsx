import React from 'react'

function UseCallbackchild({onclick}) {
    console.log("child rendered")
    return <button onClick={onclick}>Click</button>
}


export default React.memo(UseCallbackchild)