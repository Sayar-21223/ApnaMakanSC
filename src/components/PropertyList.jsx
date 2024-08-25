import React from 'react';

export const PropertyList = ({ filters, sortOption }) => {
  const { location, priceRange, propertyType } = filters || {};


  // Sample property data (In real scenario, fetch from API)
  const properties = [
    { id: 1, title: 'Luxury Apartment', location: 'New York', price: 1000000, type: 'apartment', dateAdded: '2024-08-01', popularity: 90 },
    { id: 2, title: 'Cozy House', location: 'Los Angeles', price: 500000, type: 'house', dateAdded: '2024-07-15', popularity: 75 },
    // Add more properties as needed
  ];

  // Filter properties based on location, price range, and property type
  const filteredProperties = properties.filter(property => {
    return (
      (!location || property.location.toLowerCase().includes(location.toLowerCase())) &&
      (!priceRange.min || property.price >= priceRange.min) &&
      (!priceRange.max || property.price <= priceRange.max) &&
      (!propertyType || property.type === propertyType)
    );
  });

  // Sort properties based on the selected sorting option
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'date-added':
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      case 'popularity':
        return b.popularity - a.popularity;
      default:
        return 0;
    }
  });

  return (
    <div className="property-list">
      {sortedProperties.map(property => (
        <div key={property.id} className="property-item">
          <h2>{property.title}</h2>
          <p>Location: {property.location}</p>
          <p>Price: ${property.price.toLocaleString()}</p>
          <p>Type: {property.type}</p>
          <p>Date Added: {property.dateAdded}</p>
          <p>Popularity: {property.popularity}</p>
        </div>
      ))}
    </div>
  );
};


