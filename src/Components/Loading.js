import React from 'react'
import loadingGif from "/home/whitney/Development/code/phase-2/project2/src/images/gif/loading-arrow.gif"

    const Loading = () => {
        return (
          <div className="loading">
            <h4>rooms data loading....</h4>
            <img src={loadingGif} alt="" />
          </div>
        );
      };
      export default Loading;