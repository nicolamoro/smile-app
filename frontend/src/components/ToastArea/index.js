import React from "react";
import { useDispatch } from "react-redux";
import { useToastsSelector } from "store/selectors/toasts";
import { toastDismiss } from "store/actions/toasts";
import { ToastContainerStyled, ToastStyled } from "./styled";

const ToastArea = () => {
  const toastData = useToastsSelector();
  const dispatch = useDispatch();

  return (
    <ToastContainerStyled className="position-fixed bottom-0 end-0 me-1 mb-1">
      {toastData.map((toast) => (
        <ToastStyled
          key={toast.id}
          bg={toast.variant}
          onClose={() => dispatch(toastDismiss(toast.id))}
          delay={3000}
          autohide
        >
          <ToastStyled.Body className="text-white position-relative">
            {toast.message}
            <button
              type="button"
              className="btn shadow-none position-absolute end-0 bottom-0"
              onClick={() => dispatch(toastDismiss(toast.id))}
            >
              <span className="material-icons-round align-middle text-black-50">
                close
              </span>
            </button>
          </ToastStyled.Body>
        </ToastStyled>
      ))}
    </ToastContainerStyled>
  );
};

export default ToastArea;
