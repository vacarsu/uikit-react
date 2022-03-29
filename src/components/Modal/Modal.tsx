import React from 'react';
import { render } from 'react-dom';

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
export function modal(content: JSX.Element, options?: UIkit.ModalOptions): UIkit.ModalElement {
  const divElement = document.createElement('div');
  divElement.setAttribute('uk-modal', '');
  render(<div className="uk-modal-dialog">{content}</div>, divElement);
  return UIkit.modal(divElement, options);
}
