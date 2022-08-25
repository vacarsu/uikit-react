import React, { ReactElement } from 'react';
import { render } from 'react-dom';

const UIkit = require('uikit');

/**
 * creates a simple modal elements that can contain any content you want
 * typically, this is used with the `ModalBody` and / or other modal subcomponents
 * @example
 * <pre><code>
 * modal(
 *     <ModalBody>
 *         <ModalTitle>Hello, World!</ModalTitle>
 *         <p>Hello from Modal</p>
 *     </ModalBody>
 * ).show()
 * </code></pre>
 * @param content The content to display
 * @param options Modal options
 */
export function createModal(
  content: ReactElement,
  options?: UIkit.ModalOptions,
): UIkit.ModalElement {
  const divElement = document.createElement('div');
  divElement.setAttribute('uk-modal', '');
  render(<div className={options?.className ?? 'uk-modal-dialog'}>{content}</div>, divElement);
  return UIkit.modal(divElement, options);
}
