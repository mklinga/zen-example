/* @flow */
import { connect } from 'react-redux'
import { fetchZen, saveCurrentZen } from '../modules/zen'

import Zen from '../components/Zen'

import type { ZenObject } from '../interfaces/zen'

const mapActionCreators: {fetchZen: Function, saveCurrentZen: Function} = {
  fetchZen,
  saveCurrentZen
}

const mapStateToProps = (state): { zen: ?ZenObject, saved: Array<ZenObject> } => ({
  zen: state.zen.zens.find(zen => zen.id === state.zen.current),
  saved: state.zen.zens.filter(zen => state.zen.saved.indexOf(zen.id) !== -1)
})

export default connect(mapStateToProps, mapActionCreators)(Zen)
