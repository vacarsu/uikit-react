import React from 'react';

/**
 * The 'x'-button that is visible when closing the modal
 * @param mode
 * @constructor
 */
export function ModalCloseButton({ mode }: { mode?: 'default' | 'outside' }) {
  const className = `uk-modal-close-${mode ?? 'default'}`;

  return <button className={className} type="button" data-uk-close />;
}
