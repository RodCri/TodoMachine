import { createPortal } from "react-dom"

export const Modal = ({children}) => {
  return createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('modal')
  );
}
