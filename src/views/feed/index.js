import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validateSession from 'utils/validate-session';
import { Redirect } from 'react-router-dom';
import PostList from './post-list';

const Feed = () => {
  
    return (

        <div>
            {
                validateSession()
                
            }
        </div>
    );

};

export default Feed;