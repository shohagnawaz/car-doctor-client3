import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;
  const { user } = useContext(AuthContext);
  const handleBookService = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = {
        customerName: name,
        email,
        img,
        date,
        service: title,
        service_id: _id,
        price: price
    }
    console.log(order);
    fetch('http://localhost:5000/bookings', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
              alert('service booking successfully')
            }
        })
  }
  return (
    <div>
      <h2 className="text-3xl font-bold text-orange-700 text-center">
        Book Service: {title}
      </h2>
      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              defaultValue={'$' + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;
