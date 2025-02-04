export default function CartPage() {
  return (
    <>
      <section className="page-add cart-page-add">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="page-breadcrumb">
                <h2>
                  Cart<span>.</span>
                </h2>
                <a href="#">Home</a>
                <a href="#">Dresses</a>
                <a className="active" href="#">
                  Night Dresses
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <img src="img/add.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="cart-page">
        <div className="container">
          <div className="cart-table">
            <table>
              <thead>
                <tr>
                  <th className="product-h">Product</th>
                  <th>Price</th>
                  <th className="quan">Quantity</th>
                  <th>Total</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-col">
                    <img src="img/product/product-1.jpg" alt="product" />
                    <div className="p-title">
                      <h5>Blue Dotted Shirt</h5>
                    </div>
                  </td>
                  <td className="price-col">$29</td>
                  <td className="quantity-col">
                    <div className="pro-qty">
                      <input type="text" defaultValue={1} />
                    </div>
                  </td>
                  <td className="total">$29</td>
                  <td className="product-close">x</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cart-btn">
            <div className="row">
              <div className="col-lg-6">
                <div className="coupon-input">
                  <input type="text" placeholder="Enter cupone code" />
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 text-left text-lg-right">
                <div className="site-btn clear-btn">Clear Cart</div>
                <div className="site-btn update-btn">Update Cart</div>
              </div>
            </div>
          </div>
        </div>
        <div className="shopping-method">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shipping-info">
                  <h5>Choose a shipping</h5>
                  <div className="chose-shipping">
                    <div className="cs-item">
                      <input type="radio" name="cs" id="one" />
                      <label htmlFor="one" className="active">
                        Free Standard shhipping
                        <span>Estimate for New York</span>
                      </label>
                    </div>
                    <div className="cs-item">
                      <input type="radio" name="cs" id="two" />
                      <label htmlFor="two">Next Day delievery $10</label>
                    </div>
                    <div className="cs-item last">
                      <input type="radio" name="cs" id="three" />
                      <label htmlFor="three">In Store Pickup - Free</label>
                    </div>
                  </div>
                </div>
                <div className="total-info">
                  <div className="total-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Total</th>
                          <th>Subtotal</th>
                          <th>Shipping</th>
                          <th className="total-cart">Total Cart</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="total">$29</td>
                          <td className="sub-total">$29</td>
                          <td className="shipping">$10</td>
                          <td className="total-cart-p">$39</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 text-right">
                      <a href="#" className="primary-btn chechout-btn">
                        Proceed to checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
