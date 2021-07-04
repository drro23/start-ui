import PropTypes from 'prop-types';
import '../styles/infoItem.css';

const InfoItem = (props) => {
    return (
        <li className="item">
            <span className="itemTitle">{props.name}</span>
        </li>
    )
}

InfoItem.propTypes = {
    name: PropTypes.string.isRequired,
}

export default InfoItem;
