import { Meta } from '@storybook/react';
import React, { useEffect } from 'react';
import { createModal, ModalBody, ModalCloseButton, ModalTitle } from '../../components/Modal';
import Button from '../../components/Button/Button';
import { destroyModal } from '../../components/Modal/Modal';

export default {
  title: 'Example/Modal',
} as Meta;

export const Default = () => {
  let modal: UIkit.ModalElement;

  useEffect(() => {
    modal = createModal(
      <ModalBody>
        <ModalTitle>Hello, World!</ModalTitle>
        <p>Hello from Modal</p>
        <ModalCloseButton />
      </ModalBody>,
    );

    return () => destroyModal(modal);
  }, []);

  function showModal() {
    modal.show();
  }

  return <Button onClick={showModal}>Open the modal</Button>;
};
