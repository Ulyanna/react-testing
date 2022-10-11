
import CardsSet from './components/CardsSet';
import data from "data";

export const App = () => {
  return (
    <div>
      <CardsSet items={ data} />
    </div>
  );
};



//  <Cards url={ data[1].url} title={data[1].title} price={data[1].price} quantity={data[0].quantity} />
//       <Cards url={data[0].url} title={data[0].title} price={data[0].price} quantity={data[1].quantity} />
//       <Cards url={data[2].url} title={data[2].title} price={data[2].price} quantity={data[2].quantity} />