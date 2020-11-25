import React from 'react';

export default function MovieSearch() {
    return (
        <>
        <div class="input-group mb-3 w-25">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Search for a movie</span>
            </div>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>

        </>
    )
}