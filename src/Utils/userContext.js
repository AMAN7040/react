import React, { createContext } from 'react'

const userContext = createContext(
    {
        loggedUser : 'Guest',
    }
)

export default userContext