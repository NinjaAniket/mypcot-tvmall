import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.css';
export default function Loader() {
  return (
    <div className="loaders">
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
    </div>
  );
}
