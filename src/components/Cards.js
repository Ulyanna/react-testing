import data from "data";
import PropTypes from 'prop-types';

const Cards = ({ url, title, price, quantity }) => {
    return <div>
        <img src={url} />
        <div>
            <h3>{title}</h3>
            <span>₽ {price}</span>
            <p>Доступность : { quantity > 10 ? `есть в наличии ${quantity }` : `Заканчивается ${quantity }`}</p>
            <a href="" class="button">В корзину</a>
        </div>
    </div>
};
 
Cards.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
};



export default Cards;