import React, { useRef, useState } from 'react'
import getRandomNumber from '../utils/getRandomNumber'
import './styles/form.css'

const FormSearch = ({ setIdLocation }) => {

    const idLocationValue = useRef()

    const [inputIsEmpty, setInputIsEmpty] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = idLocationValue.current.value.trim()

        if (inputValue === '') {
            setInputIsEmpty(true)

            setTimeout(() => {
                setInputIsEmpty(false)
            }, 5000);
        } else {
            setIdLocation(inputValue)
        }

    }

    return (
        <section className="rick-and-morty-section">
            <form onSubmit={handleSubmit} className="rick-and-morty-form">
                <input
                    placeholder="Enter ID Location"
                    type="text"
                    ref={idLocationValue}
                    className="rick-and-morty-input"
                />
                <button className="rick-and-morty-button">Search</button>
            </form>
            {inputIsEmpty &&
                <div className='resident require_imput' >
                    < p className='letre_require'>this field  is <span>REQUIRE</span>  </p>
                    <img src="https://media0.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif?cid=ecf05e476l3p18crnnr09yddykb3cxj1d5fzedm679npyz5b&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />

                </div>}
        </section>
    )
}

export default FormSearch