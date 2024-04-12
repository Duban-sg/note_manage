import '../../styles/MenuCollapse.css';
import Button from 'react-bootstrap/Button';
import { AvatarMenu } from "../AvatarMenu";
import { onChange } from '../../store/reducers/menuCollapseState';
import React from 'react'
import {useDispatch } from 'react-redux'

function MenuCollapse({ id,children = <></>, ...props }) {

    const dispatch = useDispatch()
    
    return (
        <div id={id} className="MenuCollpapse">
            <div className="avatarDiv">
                <AvatarMenu Username="Duban" src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671140.jpg?t=st=1712814965~exp=1712818565~hmac=91402813798079ff62323d1f22f607ff64b644497276d09da95ee0a687c4c52b&w=740" />
                <hr />
            </div>
            <div>{children}</div>
            <div className="MenuCollpapseFooter">
                <Button variant="outline-light"><i class="bi bi-box-arrow-in-right"></i> Log out</Button>
                <Button variant="outline-light" onClick={() => dispatch(onChange())}><i class="bi bi-caret-left"></i></Button>
            </div>

        </div>
    );
};


export { MenuCollapse };