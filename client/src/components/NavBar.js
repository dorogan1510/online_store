import React, { useContext } from 'react'
import { Context } from '../index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE } from './../utils/consts'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <NavLink
                    onClick={() => navigate(SHOP_ROUTE)}
                    style={{ color: 'white' }}
                >
                    Купи девайс
                </NavLink>
                {user.isAuth ? (
                    <Nav className='ms-auto' style={{ color: 'white' }}>
                        <Button
                            onClick={() => navigate(ADMIN_ROUTE)}
                            variant={'outline-light'}
                        >
                            Админ панель
                        </Button>
                        <Button
                            onClick={() => logOut()}
                            variant={'outline-light'}
                            className='ms-2'
                        >
                            Выйти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className='ml-auto' style={{ color: 'white' }}>
                        <Button
                            variant={'outline-light'}
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    )
})

export default NavBar
