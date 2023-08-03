import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import MyForm from '../../components/MyForm';
import cl from './ModalCreateHouse.module.css'

const ModalCreateHouse = ({children}) => {
    return (
        <div className={cl.modal}>
            <div className={cl.modal-content}>
                {children}
            </div>
        </div>
    );
}

export default ModalCreateHouse;