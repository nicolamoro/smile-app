import { QuantityTogglerStyled } from "./styled";

const QuantityToggler = (props) => {
  const { quantity, onPlus, onMinus } = props;

  return (
    <QuantityTogglerStyled className="flex-nowrap input-group justify-content-end">
      <button
        className="btn btn-sm btn-outline-secondary shadow-none quantity-buttons"
        type="button"
        id="button-quantity-minus"
        onClick={onMinus}
      >
        -
      </button>
      <input
        type="text"
        className="form-control quantity-text"
        placeholder=""
        readOnly
        value={quantity}
      />
      <button
        className="btn btn-sm btn-outline-secondary shadow-none quantity-buttons"
        type="button"
        onClick={onPlus}
      >
        +
      </button>
    </QuantityTogglerStyled>
  );
};

export default QuantityToggler;
