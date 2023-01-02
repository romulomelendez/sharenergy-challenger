import { ActionsFormContainer, Checkbox, RememberMe, ResetPassword } from './styles'

export const ForgotPassword: React.FC = () => {

    return (
        <ActionsFormContainer>
            <Checkbox type="checkbox" />
            <RememberMe>Keep me signed in</RememberMe>
            <ResetPassword>I forgot my password!</ResetPassword>
        </ActionsFormContainer>
    )

}