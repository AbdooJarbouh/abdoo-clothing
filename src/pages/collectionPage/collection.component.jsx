import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../REDUX/shop/shop.selectors';

import collectionItem from '../../components/collection-item/collection-item.component';

import './collections.sstyles.scss';

const collectionPage = ({ match }) => (
    <div className="collection-page">
        <h2> collection Page</h2>

    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionid)(state)
});

export default connect(mapStateToProps)(collectionPage);