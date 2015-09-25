import React from '../../server/node_modules/react/addons'

/**
 * This component creates the HTML template for TLP Banner which 
 * includes banner image and logo,title on top of the banner .
 */

export default class TLPBanner extends React.Component{
  render () {
    //have to add the logic for Deciding banner depends on screen width 
    //currently hardcoded with the first image  
    let teamBanner = this.props.banners[0]
    let teamLogo = this.props.logo[0]
    //Returns the tlp-banner element which enclosed banner img 
    //and the banner content like logo and title
    return (
      <section className = "tlp-banner" >
        <img src = {teamBanner.url} className = "tlp-banner-img" alt = {teamBanner.name} />
        <section className = "tlp-banner-content">
          <img src = {teamLogo.url} className = "tlp-logo-img" alt = {teamLogo.name}/>
          <label className = "tlp-team-name">{this.props.name}</label>
        </section>
      </section>
    )
  }
}
