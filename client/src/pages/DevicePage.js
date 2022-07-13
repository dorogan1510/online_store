import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchOneDevice, addToBasket } from './../http/deviceAPI'

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    const add = () => {
        const formData = new FormData()
        formData.append('deviceId', id)
        addToBasket(formData).then(response =>
            alert(`Товар ` + device.name + ` был добавлен в вашу корзину!`)
        )
    }

    return (
        <Container className={'mt-3'}>
            <Row className={'d-flex justify-content-center'}>
                <Col md={4}>
                    <Image
                        width={300}
                        height={300}
                        src={process.env.REACT_APP_API_URL + `/` + device.img}
                    />
                </Col>
                {/* <Col md={4}>
                    <Row className='d-flex flex-column align-items-center '>
                        <div
                            className='d-flex align-items-center  justify-content-center'
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                fontSize: 64,
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col> */}
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{
                            width: 300,
                            height: 300,
                            fontSize: 32,
                            border: '5px solid lightgray',
                        }}
                    >
                        <h3 className='text-center'>{device.name}</h3>

                        <h4>{device.price} руб.</h4>

                        <Button variant={'outline-dark'} onClick={add}>
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3 justify-content-center'>
                <h1>Характеристики</h1>
                {device.info.map((info, index) => (
                    <Row
                        key={info.id}
                        style={{
                            background:
                                index % 2 === 0 ? 'lightgray' : 'transparent',
                            padding: 10,
                        }}
                    >
                        {info.title}: {info.description}{' '}
                    </Row>
                ))}
            </Row>
        </Container>
    )
}

export default DevicePage
