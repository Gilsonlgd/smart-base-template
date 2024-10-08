import { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';
import './Fallback.css';

type RoutingError = {
  statusText?: string;
  message?: string;
};

function Fallback(): JSX.Element {
  const error = useRouteError() as RoutingError;

  useEffect(() => {
    console.error('An error occurred:', error);
  }, [error]);

  return (
    <div id="error-page" className="d-flex container-fluid">
      <div className="m-auto text-center text-light">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}

export default Fallback;
