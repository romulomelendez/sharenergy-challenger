import styled from "styled-components"

export const ActionsFormContainer = styled.div `

    display: grid;
    grid-template-columns: repeat(3, max-content);
    column-gap: 25px;
    place-items: center;
    max-height: max-content;
    padding: 15px;
    height: 100%;
    font-size: small;

`

export const Checkbox = styled.input `

    height: max-content;

`

export const RememberMe = styled.div `

    height: max-content;
    color: #d7d6d8;

`

export const ResetPassword = styled.a `

    height: max-content;
    color: #097ef6;
    cursor: pointer;

`