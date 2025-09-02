import { useSelector } from 'react-redux';

function CarList() {
  const cars = useSelector((state) => {
    const searchTerm = state.cars.searchTerm.toLowerCase();
    return state.cars.data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm);
    });
  });

  return (
    <div>
      <div className="car-list panel">
        <h4 className="subtitle is-3">Car List</h4>
        {cars.length ? (
          cars.map((car) => {
            return (
              <div key={car.id} className="panel-block">
                <p>
                  {car.name} - ${car.cost}
                </p>
              </div>
            );
          })
        ) : (
          <div className="panel-block">No cars found.</div>
        )}
      </div>
    </div>
  );
}
export default CarList;
