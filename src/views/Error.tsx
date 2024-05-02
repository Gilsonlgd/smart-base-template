import { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';
import './Error.css';

type RoutingError = {
  statusText?: string;
  message?: string;
};

function Error(): JSX.Element {
  const error = useRouteError() as RoutingError;

  useEffect(() => {
    console.error('An error occurred:', error);
  }, [error]);

  return (
    <div id="error-page" className="container-fluid">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default Error;
