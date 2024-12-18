import React from 'react';

function Image({ imageUrl }) {
    return <img src={imageUrl} style={{ width: '800px', height: '800px' }} className="card-img-top" alt="Product" />;
}

export default Image;
