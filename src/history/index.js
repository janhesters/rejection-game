import { connect } from 'react-redux';

import { getQuestions } from '../question/question-reducer';
import History from './history-component';

const mapStateToProps = state => ({ questions: getQuestions(state) });

export default connect(mapStateToProps)(History);
