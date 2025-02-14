const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]

function TshirtStore() {
  // Using state to store tshirt data
  const [tshirts, setTshirts] = React.useState([
    { title: 'Blue T-Shirt', image: 'blue-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1 },
    { title: 'Bright Purple T-Shirt', image: 'bright-purple-t-shirt.jpg', price: 5.99, stock: 1, quantity: 1 },
    { title: 'Cobalt Blue T-Shirt', image: 'cobalt-blue-t-shirt.jpg', price: 9.99, stock: 5, quantity: 1 },
    { title: 'Green T-Shirt', image: 'green-t-shirt.jpg', price: 6.99, stock: 0, quantity: 1 },
    { title: 'Grey T-Shirt', image: 'grey-t-shirt.jpg', price: 4.99, stock: 2, quantity: 1 },
    { title: 'Light Green T-Shirt', image: 'light-green-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1 },
    { title: 'Purple T-Shirt', image: 'purple-t-shirt.jpg', price: 7.99, stock: 0, quantity: 1 },
    { title: 'Red T-Shirt', image: 'red-t-shirt.jpg', price: 6.99, stock: 3, quantity: 1 },
    { title: 'Teal T-Shirt', image: 'teal-t-shirt.jpg', price: 7.99, stock: 2, quantity: 1 }
  ]);

  // Function in order to handle the buying process (decrease stock)
  function handleBuy(index) {
    const newTshirts = [...tshirts];
    if (newTshirts[index].stock >= newTshirts[index].quantity) {
      newTshirts[index].stock -= newTshirts[index].quantity;
    }
    setTshirts(newTshirts);
  }

  // Function in order to handle quantity change in the select box
  function handleQuantityChange(index, value) {
    const newTshirts = [...tshirts];
    newTshirts[index].quantity = value;
    setTshirts(newTshirts);
  }

  return (
    <div>
      {/* Loop through the 'tshirts' array to display each t-shirt */}
      {tshirts.map((tshirt, index) => (
        <div key={index}>
          <img src={`images/${tshirt.image}`} alt={tshirt.title} />
          <h3>{tshirt.title}</h3>
          <p>Price: ${tshirt.price.toFixed(2)}</p>
          {tshirt.stock > 0 ? (
            <div>
              <p>Stock: {tshirt.stock}</p>
              {/* Dropdown for selecting the quantity */}
              <select
                value={tshirt.quantity}
                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
              >
                {/* Generates the quantity options based on available stock */}
                {Array.from({ length: tshirt.stock }, (_, n) => (
                  <option key={n + 1} value={n + 1}>{n + 1}</option>
                ))}
              </select>
              {/* Handles the buying action */}
              <button onClick={() => handleBuy(index)}>Buy</button>
            </div>
          ) : (
            <p>Out of Stock</p>
          )}
        </div>
      ))}
    </div>
  );
}

//Displays the TshirtStore component within the 'root' div.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TshirtStore />);