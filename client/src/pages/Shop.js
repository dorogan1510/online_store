import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import TypeBar from './../components/TypeBar'

const Shop = () => {
    return (
        <Container>
            <div className='mt-2'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}></Col>
            </div>
        </Container>
    )
}

export default Shop
