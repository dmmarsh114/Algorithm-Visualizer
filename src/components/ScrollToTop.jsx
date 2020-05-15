// code is from https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition

// This function fixed a routing issue where react router would route to the bottom of the page on render

import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);