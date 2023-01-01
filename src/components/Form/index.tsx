import { Formulaire, Input, Button, FormTitle, FormSubTitle, TitleContainer, FormContainer } from './styles'

export const Form: React.FC = () => {

    return (

        <FormContainer>
            <TitleContainer>
                <FormTitle>LOGIN ACCOUNT</FormTitle>
                <FormSubTitle>Lorem ipsum dolor sit amet, breprehenderit, quo rerum iste eaque expedita itaque autem ad perspiciatis illo. Nisi harum assumenda omnis illum eligendi!</FormSubTitle>
            </TitleContainer>
            <Formulaire>
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Password" />
            </Formulaire>
            <Button type="button">LOGIN</Button>
        </FormContainer>

    )

}