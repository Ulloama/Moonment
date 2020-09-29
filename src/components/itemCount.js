import React, {useState , useEffect} from 'react';

function ItemCount ({ini, min, max, onAdd, onChange}) {
    const [count, setCount] = useState (ini);

    const DeCount = () => setCount(count - onAdd);
    const AddCount = () => setCount(count + onAdd);

    useEffect(() => onChange(count));

    return (
    <div style={{paddingBottom: 10}}>
        <button disabled={count === min} type='button' className='btn' onClick={ DeCount }>
            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-dash-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path fillRule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </button>
        <span>{count}</span>
        <button disabled={count === max} type='button' className='btn' onClick={ AddCount }>
            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            </svg>
        </button>
    </div>
)

};

export default ItemCount;
