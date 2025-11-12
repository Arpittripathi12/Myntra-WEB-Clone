import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItems = useSelector((store) => store.bag);
  const item = useSelector((store) => store.items);
  const finalItems = item.filter((item) => {
    const elementFound = bagItems.indexOf(item.id);
    return elementFound >= 0;
  });
  const CONVENIENCE_FEES = 99;
  let totalItem = bagItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });
  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <>
      <div className="bag-summary">
        <div class="bag-details-container">
          <div class="price-header">PRICE DETAILS ({totalItem} Items) </div>
          <div class="price-item">
            <span class="price-item-tag">Total MRP</span>
            <span class="price-item-value">₹{totalMRP}</span>
          </div>
          <div class="price-item">
            <span class="price-item-tag">Discount on MRP</span>
            <span class="price-item-value priceDetail-base-discount">
              -₹{totalDiscount}
            </span>
          </div>
          <div class="price-item">
            <span class="price-item-tag">Convenience Fee</span>
            <span class="price-item-value">₹99</span>
          </div>
          <hr />
          <div class="price-footer">
            <span class="price-item-tag">Total Amount</span>
            <span class="price-item-value">₹{finalPayment}</span>
          </div>
        </div>
        <button class="btn-place-order">
          <div class="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </>
  );
};
export default BagSummary;
