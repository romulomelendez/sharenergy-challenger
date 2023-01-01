import styled from "styled-components"

export const FormContainer = styled.div `

    background-color: white;
    display: grid;
    grid-template-rows: repeat(3, max-content);
    height: 100%;
    justify-content: center;
    align-content: center;
    row-gap: 50px;
    padding: 10px;

`

export const FormTitle = styled.h1 `

    font-size: 25pt;
    color: #097ef6;
    height: max-content;

`

export const FormSubTitle = styled.p `

    font-size: 9pt;
    color: #cecece;
    height: max-content;

`

export const TitleContainer = styled.div `

    display: grid;
    row-gap: 25px;
    height: max-content;
    text-align: center;
    max-width: 350px;

`

export const Formulaire = styled.form `

    display: grid;
    grid-template-rows: repeat(2, max-content);
    height: max-content;
    row-gap: 25px;

`

export const Input = styled.input `

    height: 32px;
    border: none;
    background-color: #f8f8f8;
    color: #097ef6;
    padding: 5px;
    outline: none;

    ::placeholder {
        color: #d7d6d8;
    }

`

export const Button = styled.button `

    width: 250px;
    height: 38px;
    padding: 8px;
    border: none;
    border-radius: 40px;
    color: white;
    background-color: #097ef6;
    font-size: 11pt;
    font-weight: 500;
    text-align: center;
    cursor: pointer;

`