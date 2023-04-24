import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const { type } = useContext(Context)

    const handleClick = (typeItem) => {
        type.setSelectedType(typeItem)
    }

    return (
        <ListGroup>
            {type.types.map(typeItem =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    active={typeItem.id === type.selectedType.id}
                    onClick={() => handleClick(typeItem)}
                    key={typeItem.id}
                >
                    {typeItem.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;
