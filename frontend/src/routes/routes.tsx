import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchProductThunk } from '../app/features/Products/thunk';
import { fetchTypesThunk } from '../app/features/Types/thunk';
import { useAppDispatch } from '../app/hooks';
import { store } from '../app/store';
import AdminPage from '../pages/admin';
import HomePage from '../pages/home';


export const RoutesApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductThunk());
    dispatch(fetchTypesThunk());
  }, [store]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<h1>Not exists</h1>} />
    </Routes>
  );
};
