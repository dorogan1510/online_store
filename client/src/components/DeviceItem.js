import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import star from '../assets/star.png'
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
            <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
                <Image
                    width={150}
                    height={150}
                    src={'http://localhost:5000/' + device.img}
                />
                <div className='mt-2'>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem
