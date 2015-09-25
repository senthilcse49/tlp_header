import React from '../../server/node_modules/react/addons'

/**
 * This component creates the HTML template for TLP Details which includes
 * title and description.
 */

export default class TLPDetails extends React.Component {
  render () {
    //Returns the html elements for showing title and description   
    return (
      <section  >
        <h4 className = "tlp-title">{this.props.title}</h4>
        <p className = "tlp-desc" >{this.props.description.head}</p>
      </section>
    )
  }

}

