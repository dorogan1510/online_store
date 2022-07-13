import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'

const DeviceItem = ({ device }) => {
    const navigate = useNavigate()

    return (
        <Col
            md={3}
            className={'mt-3'}
            onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
        >
            <Card
                className='mr-2'
                style={{ width: 150, cursor: 'pointer' }}
                border={'light'}
            >
                <Image
                    width={150}
                    height={150}
                    src={process.env.REACT_APP_API_URL + `/` + device.img}
                />
                <div className='mt-2' style={{ height: 45 }}>
                    {device.name}
                </div>
                <div className='mt-2' style={{ fontSize: 24 }}>
                    {device.price} руб.
                </div>
            </Card>
        </Col>
    )
}

export default DeviceItem
