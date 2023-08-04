import {React, useState} from 'react';
import { Button, Modal } from "antd";

export default function MyModalWindow({children, title}) {
    const [openModal, setOpenModal] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showModal = () => {
        setOpenModal(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpenModal(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setOpenModal(false);
    };
    return (
        <>
        <Button type="primary" style={{margin: 16}} onClick={showModal}>
            Создать новый дом
        </Button>
        <Modal
            title={title}
            footer = {null}
            destroyOnClose='true'
            open={openModal}
            onCancel={handleCancel}
            confirmLoading={confirmLoading}
            >
            {children}
            </Modal>
        </>
    )
}
