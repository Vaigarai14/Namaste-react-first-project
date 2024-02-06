import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './component/Header';
import Body from './component/Body';

const root = ReactDOM.createRoot(document.getElementById('root'))


const Applayout = () => {
    return (<div className='main-container-of-all'>
        <Header />
        <Body />
    </div>
    )
}


root.render(<Applayout />);
