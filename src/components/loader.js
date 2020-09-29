import React from 'react';

export function Loader ({loading, component}) {
    return <div className="d-flex justify-content-center" style={{padding: 50}}>
            {loading === true ? 
            <div className="spinner-grow text-primary" role="status"><span className="sr-only">Loading...</span></div>
            : component}
        </div>
};