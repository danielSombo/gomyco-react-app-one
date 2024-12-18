import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';

function App() {
  const firstName = 'Esli';

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <Image imageUrl={product.image} />
            <Name name={product.name} />
            <Price price={product.price} />
            <Description description={product.description} />
          </div>
        </div>
        <p className="mt-3">
          {firstName ? `Bonjour, ${firstName}!` : 'Bonjour!'}
        </p>
        {firstName && <img src="https://via.placeholder.com/150" alt="Placeholder" />}
      </div>
    </div>
  );
}

export default App;
