
import CardData from "../Home/CardData";
import "./Order.css"
import { useNavigate } from "react-router-dom";
export default function OrderTable({ itemData }) {
    const navigate = useNavigate();
    var totalPrice = 0;
    var sgst = 0;
    var cgst = 0;
    var grandTotal = 0;
    return (

        <>
             <h1 className="text">My Order</h1>
             <div className="linethrough"></div>
            <div id="carthome_1" className="home section">
                <div className="home__section">
                    <div className="grid">
                        {
                            itemData.map((el) => {
                                totalPrice += el.price * el.qty;
                                sgst = + + parseFloat(totalPrice * (9 / 100));
                                cgst = + + parseFloat(totalPrice * (9 / 100));
                                grandTotal = totalPrice + (totalPrice * (18 / 100));
                                return (
                                    <div className="products">

                                        <img src={el.img} />
                                        <div className="product__infos">
                                            <h5>{el.title}</h5>
                                            <div className="flxes">
                                                <h6>Price:{el.price} Rs <span className="cross">{el.cutPrice} Rs</span></h6>
                                                <h6>Qty:{el.qty}</h6>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }


                    </div>

                    <div className="total1">
                        <div className="products1">
                            <div className='total3'>GST(18%):
                                <span>{Math.round(sgst) + Math.round(cgst)} Rs</span>
                            </div>

                            <p className='total3'> SubTotal:
                                <span>{totalPrice} Rs</span>
                            </p>

                            <div className='total3'>GrandTotal:
                                <span>{Math.round(grandTotal)} Rs</span>
                            </div>


                        </div>

                        <div className='buttttons1'>
                            <button className='color1' onClick={() => navigate("/order")}>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}