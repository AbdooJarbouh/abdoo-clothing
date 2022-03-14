import React from 'react';
import { Route } from 'react-router-dom';
 
import collectionsOverView from '../../components/Collection-overview/Collection-overview.component';
  import CollectionPage from '../collectionPage/collection.component';
  
const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={collectionsOverView} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
);

export default ShopPage;