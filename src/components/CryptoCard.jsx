import PropTypes from "prop-types";

const CryptoCard = (props) => {

    const name = props.name;
    const image = props.image;
    const marketCap = props.marketCap;

  return (
    <div className="border border-gray-500 bg-slate-300 w-72 h-72 p-2 m-2 rounded-lg" >
        <img src={image} alt=""  className=" h-40 w-40  m-auto py-2" />
        <div className="py-16">
            <h1 className="font-semibold text-md text-black ">{name}</h1>
            <h1 className="font-light text-sm text-black">{marketCap}</h1>
        </div>
    </div>
  )
}

CryptoCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    marketCap: PropTypes.number,
  };

export default CryptoCard