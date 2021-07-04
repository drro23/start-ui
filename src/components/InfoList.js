import {useSelector} from 'react-redux';
import InfoItem from "./InfoItem";
import '../styles/infoList.css';

const InfoList = () => {
    const {resourceInfos} = useSelector(
        (state) => state.searchResources
    );

    const renderListItems = resourceInfos.map((res, i) => {
        return (
            <InfoItem key={i} name={res.name ? res.name : res.title}/>
        )
    });

    return (
        <div className="container">
            {resourceInfos.length !== 0 ? (<ul className="resourcesList">{renderListItems}</ul>) :
                <p className="dataNotFound">No empire data found !</p>}

        </div>
    )
}

export default InfoList;
