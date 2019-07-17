import { connect } from 'react-redux';

import Scores from './scores-component';
import { getDayScore, getTotalScore } from './scores-selector';

const mapStateToProps = state => ({
  dayScore: getDayScore(state),
  totalScore: getTotalScore(state),
});

export default connect(mapStateToProps)(Scores);
