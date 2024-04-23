
import PropTypes from "prop-types";
import CryptoCard from "./CryptoCard";

const CryptoList = (props) => {

    const list = props.list;

    if(list.length === 0 ) return;

    return (
        <div className="flex flex-wrap px-28">
            {
                list.map( item => <CryptoCard key={item.id} name={ item.name } image={item.image} marketCap={item.market_cap} />)
            
            }
        </div>
    )
}

CryptoList.propTypes = {
    list: PropTypes.array
  };

export default CryptoList