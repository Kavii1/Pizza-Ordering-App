import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const Home = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch("/allPizzas", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(res => res.json())
      .then(pizzas => {
        setData(pizzas)
        console.log(pizzas);
      })
  }, []);

  return (
    <div>
      <Container>
        <div className="pizza-container">
          <h2 className="common-heading">Most Popular</h2>
          <div className="pizza-content">
            {
              data && data.map(item => {
                return (
                  <div className="pizza-block" key={item._id}>
                    <div>
                      <h3>{item.title}</h3>
                      <div className="sizes">
                        <button>32cm</button>
                        <button>40cm</button>
                        <button>54cm</button>
                      </div>
                    </div>
                    <div className='text-end'>
                      <h6 className="price">${item.price}</h6>
                      <button className='add-ingredients'><i className="fab fa-gg"></i>
                        <span className="tooltiptext">Add Ingredients &amp; Toppings</span>
                      </button>
                      <button className='add-to-cart'><i className="fa fa-plus"></i>
                        <span className="tooltiptext">Add to Cart</span>
                      </button>
                    </div>
                  </div>
                )
              })
            }
            {/* <div className="pizza-block">
              <div>
                <h3>Capriciosa</h3>
                <div className="sizes">
                  <button>32cm</button>
                  <button>40cm</button>
                  <button>54cm</button>
                </div>
              </div>
              <div className='text-end'>
                <h6 className="price">$11.25</h6>
                <button className='add-ingredients'><i className="fab fa-gg"></i>
                  <span className="tooltiptext">Add Ingredients &amp; Toppings</span>
                </button>
                <button className='add-to-cart'><i className="fa fa-plus"></i>
                  <span className="tooltiptext">Add to Cart</span>
                </button>
              </div>
            </div>
            <div className="pizza-block">
              <div>
                <h3>Prosciutto</h3>
                <div className="sizes">
                  <button>32cm</button>
                  <button>40cm</button>
                  <button>54cm</button>
                </div>
              </div>
              <div className='text-end'>
                <h6 className="price">$10.00</h6>
                <button className='add-ingredients'><i className="fab fa-gg"></i>
                  <span className="tooltiptext">Add Ingredients &amp; Toppings</span>
                </button>
                <button className='add-to-cart'><i className="fa fa-plus"></i>
                  <span className="tooltiptext">Add to Cart</span>
                </button>
              </div>
            </div>
            <div className="pizza-block">
              <div>
                <h3>Vegetariana</h3>
                <div className="sizes">
                  <button>32cm</button>
                  <button>40cm</button>
                  <button>54cm</button>
                </div>
              </div>
              <div className='text-end'>
                <h6 className="price">$14.00</h6>
                <button className='add-ingredients'><i className="fab fa-gg"></i>
                  <span className="tooltiptext">Add Ingredients &amp; Toppings</span>
                </button>
                <button className='add-to-cart'><i className="fa fa-plus"></i>
                  <span className="tooltiptext">Add to Cart</span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home