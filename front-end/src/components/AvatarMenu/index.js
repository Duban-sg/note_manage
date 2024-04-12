import '../../styles/AvatarMenu.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import { AvatarInfo } from './AvatarInfo';
import React from 'react';



function AvatarMenu({ src, Username, ...props }) {

    return (
        <Stack direction="horizontal" gap={3}>
            <div><Image src={src} roundedCircle fluid /></div>
            <div className="me-auto">
                <Dropdown>
                    <Dropdown.Toggle as={AvatarInfo} id="dropdown-custom-components">
                        <Stack direction="horizontal" gap={2}>
                            <span className="ms-auto">{Username}</span>
                            <span className=""><i class="bi bi-caret-down-fill"></i></span>
                        </Stack>
                        
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            Orange
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Stack>

    )

};


export { AvatarMenu };