/* @flow */
import React from 'react'
import classes from './Zen.scss'

import type { ZenObject } from '../interfaces/zen'

type Props = {
  zen: ?ZenObject,
  saved: Array<ZenObject>,
  fetchZen: Function,
  saveCurrentZen: Function
}

export const Zen = (props: Props) => (
  <div>
    <div>
      <h2 className={classes.zenHeader}>
        {props.zen.value}
      </h2>
      <button className='btn btn-default' onClick={props.fetchZen}>
        Refresh
      </button>
      {' '}
      <button className='btn btn-default' onClick={props.saveCurrentZen}>
        Save
      </button>
    </div>
    <div className={classes.savedWisdoms}>
      <h3>
        Saved wisdoms
      </h3>
      <ul>
        {props.saved.map(zen =>
          <li key={zen.id}>
            {zen.value}
          </li>
        )}
      </ul>
    </div>
  </div>
)

Zen.propTypes = {
  zen: React.PropTypes.object,
  saved: React.PropTypes.array.isRequired,
  fetchZen: React.PropTypes.func.isRequired,
  saveCurrentZen: React.PropTypes.func.isRequired
}

export default Zen
