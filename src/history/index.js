import { connect } from 'react-redux';

import { getAsks } from '../ask/ask-reducer';
import History from './history-component';

const mapStateToProps = state => ({ asks: getAsks(state) });

export default connect(mapStateToProps)(History);
