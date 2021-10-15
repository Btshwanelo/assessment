import React from 'react'
import CardComponent from  './CardComponent'

function RandomData() {
    return (
        <div class="w3-container" style={{padding:"128px 16px"}} id="team">
    <h3 class="w3-center">Data</h3>
    <p class="w3-center w3-large">Random data from the Api</p>
    <div class="w3-row-padding w3-grayscale" style={{marginTop:"64px"}}>
        <CardComponent />
        </div></div>
    )
}

export default RandomData
