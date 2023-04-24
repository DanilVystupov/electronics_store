import React, { useContext, useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Context } from './../../index';
import { getTypes } from '../../http/typeAPI';
import { getBrands } from '../../http/brandAPI';
import { observer } from 'mobx-react-lite';
import { createDevice } from '../../http/deviceAPI';

const ModalDevice = observer(({ show, onHide }) => {

    const { type } = useContext(Context)
    const { brand } = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(() => {
        getTypes().then(data => type.setTypes(data))
        getBrands().then(data => brand.setBrands(data))
    }, [])


    const addInfo = () => {
        setInfo([...info, { title: '', description: '', id: Date.now() }])
    }

    const removeInfo = (id) => {
        setInfo(info.filter(i => i.id !== id))
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const changeInfo = (key, value, id) => {
        setInfo(info.map(i => i.id === id ? { ...i, [key]: value } : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('type', type.selectedType.id)
        formData.append('brand', brand.selectedBrand.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новое устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2'>
                        <Dropdown.Toggle>
                            {type.selectedType.name || "Выберите тип"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {type.types.map(typeItem =>
                                <Dropdown.Item
                                    onClick={() => type.setSelectedType(typeItem)}
                                    key={typeItem.id}
                                >
                                    {typeItem.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2'>
                        <Dropdown.Toggle>
                            {brand.selectedBrand.name || "Выберите бренд"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {brand.brands.map(brandItem =>
                                <Dropdown.Item
                                    onClick={() => brand.setSelectedBrand(brandItem)}
                                    key={brandItem.id}
                                >
                                    {brandItem.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='mt-3'
                        placeholder='Введите название устройства'
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Введите стоимость устройства'
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
                    />
                    <hr />
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className='mt-3' key={i.id}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.id)}
                                    placeholder='Введите название свойства'
                                />
                            </Col>

                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.id)}
                                    placeholder='Введите описание свойства'
                                />
                            </Col>

                            <Col md={4}>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={() => removeInfo(i.id)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
});

export default ModalDevice
