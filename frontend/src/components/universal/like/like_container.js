import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import Like from './like';
import { createLikedProduct, deleteLikedProduct } from '../../../actions/like_actions';

const msp = (state, ownProps) => {
  const productListObject = {};
  if (Object.keys(state.likedProducts).length > 0) {
    state.likedProducts.list.map( product => {
      productListObject[product.asin] = product._id
    })
  }
  return {
    product: ownProps.props,
    userId: state.session.user.id,
    productList: productListObject
  }
};

//product should be a prop passed to like_container from index item or show modal

const mdp = dispatch => ({
  createLikedProduct: (data) => dispatch(createLikedProduct(data)),
  deleteLikedProduct: (identifier) => dispatch(deleteLikedProduct(identifier))
});

export default withRouter(connect(msp, mdp)(Like));