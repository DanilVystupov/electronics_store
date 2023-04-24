import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index';
import { PageItem, Pagination } from 'react-bootstrap';

const Paginations = observer(() => {

    const { page } = useContext(Context)

    const pageCount = Math.ceil(page.totalCount / page.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className='mt-5'>
            {pages.map(pageItem =>
                <Pagination.Item
                    key={pageItem}
                    active={page.page === pageItem}
                    onClick={() => page.setPage(pageItem)}
                >
                    {pageItem}
                </Pagination.Item>
            )}
        </Pagination>
    )
});

export default Paginations
