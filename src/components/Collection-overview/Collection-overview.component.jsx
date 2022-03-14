import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { selectCollections } from '../../REDUX/shop/shop.selectors';

import './Collection-overview.styles.scss';

const collectionsOverView = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({ id, ...othercollectionProps }) => (
            <CollectionPreview key={id} {...othercollectionProps} />
        ))};
    </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
}); 

export default connect(mapStateToProps)(collectionsOverView);