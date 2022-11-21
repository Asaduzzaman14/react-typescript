import React from 'react';

type datafetch = {
    statuss: string
}


const DataFetch = ({ statuss }: datafetch) => {

    if (statuss === "loading") {
        return <h2>data is loading</h2>
    }
    else if (statuss === "error") {
        return <h2>Error: data could not fetch</h2>
    }


    return (
        <div>

            <h2>data fetch Successfully</h2>


        </div>
    );
};

export default DataFetch;