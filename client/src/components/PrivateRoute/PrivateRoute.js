import React from 'react'
import {useSelector} from "react-redux"
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({component:Component, ...defaultprops}) => {
    const isAuth = useSelector(state => state.userReducer.isAuth)

    if(!isAuth) return <Redirect to="/login" />
    return (
        <div>
            <Route component={Component} {...defaultprops} />
        </div>
    )
}

export default PrivateRoute
