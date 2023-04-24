import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import ModalBrand from './../components/modals/ModalBrand';
import ModalDevice from './../components/modals/ModalDevice';
import ModalType from '../components/modals/ModalType';

const Admin = () => {

    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)

    return (
        <Container className='d-flex flex-column'>
            <Button
                variant={'outline-dark'}
                className='mt-4 p-2'
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={'outline-dark'}
                className='mt-4 p-2'
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={'outline-dark'}
                className='mt-4 p-2'
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <ModalBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <ModalDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
            <ModalType show={typeVisible} onHide={() => setTypeVisible(false)} />

        </Container>
    )
}

export default Admin
