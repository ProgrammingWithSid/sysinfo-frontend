// src/routes/index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemList from '../pages/Home';
import ItemDetail from '../pages/DetailsView';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path="/details/:pcName" element={<ItemDetail />} />
    </Routes>
  );
};

export default AppRoutes;
