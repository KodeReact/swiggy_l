import React from "react";
import ReactDOM from "react-dom/client";


// jsx -> not html in js . it is html like syntax.

// jsx=>React.createElement=>js object=>htmlElement.
const jsxHeading=<h1 className='heading'>Namste react using jsx!</h1>

const Title=()=><h1>namaste react</h1>

// React Functional Component
const HeadingComponent=()=>{
    return(
        <div>
            <Title/>
            {Title()}
            {jsxHeading}
            <h2>functional componenet</h2>
        </div>
    )
}

console.log(jsxHeading);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);