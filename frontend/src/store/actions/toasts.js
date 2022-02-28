export const TOAST_SHOW = "TOAST_SHOW";
export const TOAST_DISMISS = "TOAST_DISMISS";

export const toastShow = (message, variant) => {
  return {
    type: TOAST_SHOW,
    message,
    variant,
  };
};

export const toastDismiss = (id) => {
  return {
    type: TOAST_DISMISS,
    id: id,
  };
};
