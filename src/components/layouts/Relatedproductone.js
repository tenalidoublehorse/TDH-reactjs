import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Quickview from './Quickview';
import products from "../../data/product.json";
import { Rating } from "../../helper/helper";

class Relatedproduct extends Component {

    constructor(props) {
        debugger;
        super(props);
        this.state = {
            modalshow: false,
            lastActiveBox: -1,
        };
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
    }
    
    
    // Modal
    modalShow(index) {
        this.setState({ modalshow: true, lastActiveBox: index });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }
   
    render() {
        const { productId } = this.props;
        return (
            
            <div className="section section-padding related-products pt-0">
                <div className="container-fluid">
                    <h3>You might also like</h3>
                    <div className="row menu-v2">
                     
                        {products.filter(item => item.countery === productId).slice(0, 3).map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="product">
                                    <div className="favorite">
                                        <i className="far fa-heart" />
                                    </div>
                                    <Link className="product-thumb" to={"/menu-item-v1/" + item.id}>
                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} />
                                    </Link>
                                    <div className="product-body">
                                        <div className="product-desc">
                                            <h4> <Link to={"/menu-item-v1/" + item.id}>{item.name}</Link></h4>
                                            <div className="ct-rating-wrapper">
                                                <div className="ct-rating">
                                                    {Rating(item.rating)}
                                                </div>
                                            </div>
                                            <p>{item.shortdesc}</p>
                                         
                                        </div>
                                        <div className="product-controls">
                                        {/* {item.price === 0 ? <p></p>:
                                            <p className="product-price">{item.symbol} 
                                            {new Intl.NumberFormat().format((item.price).toFixed(2))}
                                            </p>
                                        } */}
                                            {/* <Link to={"/menu-item-v1/" + item.id} className="order-item btn-custom btn-sm shadow-none">Order <i className="fas fa-shopping-cart" /> </Link> */}
                                            <button type="button" className="order-item btn-custom btn-sm shadow-none" onClick={(e) => this.modalShow(item.id)}> More info<i className="fas fa-plus" /> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Product End */}
                    </div>
                </div>
                <Modal show={this.state.modalshow} id="customizeModal" onHide={this.modalClose} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
                    <Quickview productId={this.state.lastActiveBox} />
                </Modal>
            </div>
        );
    }
}

export default Relatedproduct;