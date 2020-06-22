import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux'

//import { selectAreTeamsFetching } from 
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collection-overview.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectAreTeamsFetching
})

const CollectionsOverviewContainer =  compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;