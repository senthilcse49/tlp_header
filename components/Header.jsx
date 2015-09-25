import React from '../../server/node_modules/react/addons'
import TLPBanner from "./banner.jsx"
import TLPDetails from "./details.jsx"
import TLPDepartments from "./departments.jsx"

/**
 * This component creates the HTML template for TLP Header which includes
 * banner, logo, title, description and department links.
 */

export default class TLPHeader extends React.Component {
  render () {
    let tlp = this.props.tlp  
    /*Adding condition to the check if the model data is available  
      and banner data is available on the response  */
    if (!tlp ) {
      return (<section className = "tlp-header"></section>);  
    } else if (tlp.banners && tlp.banners.length > 0 && tlp.banners[0].url) {
      // Returning the template with other React components like "Details" and "Departments"
      return (
        <section className = "tlp-header">
          <TLPBanner 
            name = {tlp.name} 
            logo = {tlp.logos}
            banners = {tlp.banners}
          />
          <section className = "tlp-details">
            <TLPDetails
              description = {tlp.description}
              title = {tlp.name}
            />
            <TLPDepartments departments = {tlp.departmentInfo.departments} />
          </section>
        </section>
      )
    } else {
      // Returning the template with other React components like Banner, Details and Departments
      return (
        <section className = "tlp-header">
          <section className = "tlp-details">
            <TLPDetails 
              description = {tlp.description}
              title = {tlp.name}
            />
            <TLPDepartments departments = {tlp.departmentInfo.departments} />
          </section>
        </section>
      )
    }
  }
}


