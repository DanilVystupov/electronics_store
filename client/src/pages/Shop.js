import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from './../index';
import { getTypes } from '../http/typeAPI';
import { getBrands } from '../http/brandAPI';
import { getDevices } from '../http/deviceAPI';
import Paginations from '../components/Paginations';

const Shop = observer(() => {

    const { type } = useContext(Context)
    const { brand } = useContext(Context)
    const { device } = useContext(Context)
    const { page } = useContext(Context)

    useEffect(() => {
        getTypes().then(data => type.setTypes(data))
        getBrands().then(data => brand.setBrands(data))
        getDevices(null, null, 1, 6).then(data => {
            device.setDevices(data.rows)
            page.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        getDevices(type.selectedType.id, brand.selectedBrand.id, page.page, 6).then(data => {
            device.setDevices(data.rows)
            page.setTotalCount(data.count)
        })
    }, [page.page, type.selectedType, brand.selectedBrand,])

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar />
                </Col>

                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                    <Paginations />
                </Col>
            </Row>
        </Container>
    )
});

export default Shop