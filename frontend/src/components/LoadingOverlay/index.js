import { LoadingOverlayStyled } from "./styled";

const LoadingOverlay = () => {
  return (
    <LoadingOverlayStyled className="d-flex justify-content-center align-items-center">
      <div className="spinner-border text-light " role="status"></div>
    </LoadingOverlayStyled>
  );
};

export default LoadingOverlay;
