import React from 'react';

type Props = {
  setCredentialsPage: (state: boolean) => void;
  tokensResponse: any
};

const ResultsPage: React.FC<Props> = ({setCredentialsPage, tokensResponse}) => {
  return (
    <div className="card login-card col-12 col-lg-4 mt-2 hv-center">
      <label htmlFor="resultsOutput">
        {tokensResponse ? tokensResponse : "Loading..."}
      </label>
      <a onClick={(event) => {
        event.preventDefault();
        setCredentialsPage(true);
      }}
        href="/"
        className="btn btn-secondary"
      >
        Back to Home Page
      </a>
    </div>
  )
}

export default ResultsPage;