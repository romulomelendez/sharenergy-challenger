import { useEffect, useState } from 'react'

import { UserContainer } from './styles'

type UserProps = {

    name: string
    lastname: string
    gender: string
    age: number
    email: string
    picture: string

}

export const Dashboard: React.FC = () => {

    const [ users, setUsers ] = useState<UserProps[]>([])

    useEffect( () => {

        let userControl = 0
        while (userControl <= 4) {
            fetch(import.meta.env.VITE_API_URL)
              .then(response => response.json())
              .then(userData => {

                let user: UserProps = {
                    name: userData.results[0].name.first,
                    lastname: userData.results[0].name.last,
                    gender: userData.results[0].gender,
                    age: userData.results[0].registered.age,
                    email: userData.results[0].email,
                    picture: userData.results[0].picture.thumbnail
                }

                setUsers(users => [...users, user])

              })

            userControl++
        }

    }, [])

    return (
        <>
            {
                users ?
                    users.map(( user, index ) => (
                        <UserContainer key={index}>
                            <img src={ user.picture } height='50' width='50' />
                            <h3>{ user.name } { user.lastname }</h3>
                            <h4>{ user.age }</h4>
                            <h4>{ user.gender }</h4>
                            <h4>{ user.email }</h4>
                            <hr />
                        </UserContainer>
                    ))
                : <p>No users found!</p>    
            }
        </>
    )

}