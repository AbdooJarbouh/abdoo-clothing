import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../REDUX/directory/directory.selectors';



import "./directory.styles.scss";

import MenuItem from '../menu-item/menu-item.component';


const Directory = ({ sections }) => (
  
  <div className="directory-menu">
    {
     sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection

});



export default connect(mapStateToProps)(Directory);