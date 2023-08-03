import {React, useState} from 'react';
import { Button, Input, Layout, Menu, Modal, theme } from "antd";

export default function MyModalWindow({ children }) {
    const [openModal, setOpenModal] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
        setOpenModal(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpenModal(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpenModal(false);
    };
    return (
        <>
        <Button type="primary" onClick={showModal}>
            Создать новый дом
        </Button>
        <Modal
            title="Title"
            open={openModal}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}>
                
            </Modal>
        </>
    )
}
