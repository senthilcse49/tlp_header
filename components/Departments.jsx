import React from '../../server/node_modules/react/addons'

/**
 * This component creates the HTML template for TLP Departments which 
 * includes anchor tag for each department wrapped inside nav>ul.
 */
export default class TLPDepartments extends React.Component {
  render () {
    let dpts = this.props.departments
    if (dpts.length > 0) {
      //Returns nav->ul with set of li->a elements for department   
      return (
        <section className = "tpl-departments">
          <nav>
            <ul> {
              //Iterator for departments    
              dpts.map(function (dpt) {
                return (
                  <li 
                    className = "tlp-department"
                    key = {dpt.departmentURL}>
                    <a 
                      href = {dpt.departmentURL}
                      title = {dpt.title}>{dpt.name}
                    </a>
                  </li>
                )
              })
            }
            </ul>
          </nav>
        </section>)
    } else {
      //return empty departmentName if the there is no departments available
      return (<section className = "tpl-departments" ></section>)
    }
  }
}

