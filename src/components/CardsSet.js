import PropTypes from 'prop-types';
import Cards from './Cards';

function CardsSet({ items }) {
    return (
    <ul>
        {items.map(item => (
            <li key={item.id}>
                <Cards   
                    url={item.url}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity} />
            </li>
        ))}
    </ul>)
};

CardsSet.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}

export default CardsSet;
