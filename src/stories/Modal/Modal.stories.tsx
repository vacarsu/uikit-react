import { Meta } from '@storybook/react';
import React from 'react';
import { createModal, ModalBody, ModalCloseButton, ModalTitle } from '../../components/Modal';
import Button from '../../components/Button/Button';

export default {
  title: 'Example/Modal',
} as Meta;

export const Default = () => {
  function showModal() {
    createModal(
      <ModalBody>
        <ModalTitle>Hello, World!</ModalTitle>
        <p>Hello from Modal</p>
        <ModalCloseButton />
      </ModalBody>,
    ).show();
  }

  return <Button onClick={showModal}>Open the modal</Button>;
};
