import PropTypes from 'prop-types';

const Button = (props) => {
    return (<button className="detailsBtn" onClick={props.onClick}>Details</button>);
}

Button.propTypes = {
    onClick: PropTypes.func,

}

export default Button;
