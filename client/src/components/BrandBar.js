import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite';
import { Context } from './../index';
import { Card, Form } from 'react-bootstrap';

const BrandBar = observer(() => {

    const { brand } = useContext(Context)

    const handleClick = (brandItem) => {
        brand.setSelectedBrand(brandItem)
    }

    return (
        <Form className='d-flex flex-wrap'>
            {brand.brands.map(brandItem =>
                <Card
                    style={{ cursor: 'pointer' }}
                    key={brandItem.id}
                    className='p-3'
                    onClick={() => handleClick(brandItem)}
                    border={brandItem.id === brand.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brandItem.name}
                </Card>
            )}
        </Form>
    );
});

export default BrandBar
