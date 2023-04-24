import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import star from '../assets/star.png'
import { useNavigate } from "react-router-dom"
import { DEVICE_ROUTE } from '../utils/consts'

const DeviceItem = ({ deviceItem }) => {

    const navigate = useNavigate()

    return (
        <Col md={3} className='mt-3' onClick={() => navigate(DEVICE_ROUTE + '/' + deviceItem.id)}>
            <Card style={{ width: '150', cursor: 'pointer' }} border='light'>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + deviceItem.img} />
                <div className='text-black-50 mt-2 mb-2 d-flex justify-content-between align-items-center'>
                    <div>{deviceItem.name}</div>
                    <div className='d-flex align-items-center'>
                        <div className='px-1'>{deviceItem.rating}</div>
                        <Image width={15} height={15} src={star} />
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default DeviceItem
