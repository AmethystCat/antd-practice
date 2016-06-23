import React from 'react'; 
import ReactDOM from 'react-dom';
import { bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
import * as actionCreators from './actions/creators';
import store from './store/main';
import Main from './frame/main.jsx';

function mapStateToProps(state) {
    return {
        menuTab: state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

let System = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

ReactDOM.render(
    <Provider store={store}>
        <System/>
    </Provider>, document.getElementById('app')
);