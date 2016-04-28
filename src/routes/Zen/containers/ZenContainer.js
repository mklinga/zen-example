import { connect } from 'react-redux'
import { fetchZen, saveCurrentZen } from '../modules/zen'

import Zen from '../components/Zen'

const mapActionCreators = {
  fetchZen,
  saveCurrentZen
}

const mapStateToProps = (state) => ({
  zen: state.zen.zens.find(zen => zen.id === state.zen.current) || { id: null, value: '' },
  saved: state.zen.saved
    .map(id => state.zen.zens.find(zen => zen.id === id))
})

export default connect(mapStateToProps, mapActionCreators)(Zen)
