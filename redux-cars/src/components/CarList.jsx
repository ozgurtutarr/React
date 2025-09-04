import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { removeCar } from '../store';

const memoizedCars = createSelector(
  [(state) => state.cars.data, (state) => state.cars.searchTerm],
  (data, searchTerm) =>
    data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(memoizedCars);
  const name = useSelector((state) => state.form.name);

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold ? 'bold' : ''}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => handleCarDelete(car)}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}
export default CarList;
