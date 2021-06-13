
import App from '../../App';
import { compose } from 'redux';
import WithSpinner from '../with-spinner/with-spinner.component';
import { connect } from 'react-redux';
import HeaderComponents from './header.components';
import { withRouter } from 'react-router';



// const mapStateToProps = createStructuredSelector({
//     isFetching: selectFetchingFlag,
// })
const mapStateToProps = (state)=>{
    return{
        isLoading: false
    }
}

const HeaderContainer = compose(
    withRouter,
    connect(mapStateToProps),
    WithSpinner
)(HeaderComponents)

export default HeaderContainer