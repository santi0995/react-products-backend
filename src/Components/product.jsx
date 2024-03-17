import { useEffect, useState } from "react";

import axios from "axios";

export default function Products(){
    const [products, setProducts] = useState([]);
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);

    useEffect(() => {
        axios("http://localhost:8080/api/products")
          .then((res) => {
            setProducts(res.data.response.docs);
            setPrev(res.data.response.prevPage);
            setNext(res.data.response.nextPage);
          })
          .catch((err) => console.log(err));
      }, []);

      return(
        <>
              <div
        id="productos"
        className="container d-flex flex-wrap justify-content-evenly"
      >
        {products.map((each) => (
        <section key={each.id} id="products">
            <div className="card" style={{ width: "15rem" }}>
            <img src={{}} className="card-img-top" alt="photo" />
              <h5 className="card-title">{each.title}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{each.price}</li>
                <li className="list-group-item">{each.stock} </li>
              </ul>
            </div>
            <span className="w-100 d-flex justify-content-center"></span>
          </section>
        ))}
        {prev && (
          <a
            className="btn btn-danger fs-5 m-4 mt-0"
            href="/?title={{filter}}&page={{prev}}"
          >
            PREV
          </a>
        )}{" "}
        {next && (
          <a
            className="btn btn-danger fs-5 m-4 mt-0"
            href="/?title={{filter}}&page={{next}}"
          >
            NEXT
          </a>
        )}
      </div>
        </>
      )

}