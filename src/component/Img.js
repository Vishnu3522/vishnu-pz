import React from 'react'
import './Img.css';
import dsp from "../Assets/dsp.png"
import lm from "../Assets/lm.png"
import ic from "../Assets/ic.png"
function Img() {
  return (
      <>
      <h2 className='mid-head'>Managing HR, Payroll, and Compliance
was<br></br> Never So Easy</h2>

<div className='container-img'>
    <div className='row'>
        <div class="card">
            <center><img src={dsp}class="card-img-top" alt="..."></img></center>
            <div class="card-body">
                <h5 class="card-title">DIRECT SALARY PAYMENT</h5>
                <p class="card-text">Calculate salary in minutes and transfer it to employees' bank accounts directly from Paybooks.​.</p>
            </div>
        </div>

        <div class="card">
            <center><img src={ic} class="card-img-top" alt="..."></img></center>
            <div class="card-body">
                <h5 class="card-title">INBUILT COMPLIANCE</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div class="card">
      <ceneter> <img src={lm} class="card-img-top" alt="..."></img></ceneter>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>

    <div className='row'>
        <div class="card">
            <img src={dsp} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">DIRECT SALARY PAYMENT</h5>
                <p class="card-text">Calculate salary in minutes and transfer it to employees' bank accounts directly from Paybooks.​.</p>
            </div>
        </div>

        <div class="card">
            <img src={ic} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">INBUILT COMPLIANCE</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div class="card">
            <img src={lm} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>

</div>



    </>
  )
}

export default Img