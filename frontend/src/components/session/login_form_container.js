import { connect } from "react-redux";
import { login, receiveErrors } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    isAuthenticated: state.session.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    receiveErrors: (error) => dispatch(receiveErrors(error)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
