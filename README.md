# tlp_header

React JS component for Tlp anlong with stylesheet and test suite.
Folder are structured in such a way ReactJs and its corresponding stylesheets are wrapped in components and components/css folder.

Test suite is wrapped in test folder which in turn contain __test__ and test_data folder. Jsons for the test are kept in  test_data folder where the test case are in __test__. 

To render the TLP Header component , require Header.jsx which is available in the path tlp_header/components/Header.jsx and it accepts one data attribute tlp , which should be json. It is in ES6,JSX syntax need to be converted to js and es5 format in node which can be acheived using babel.  

var TLPHeader = require(dirName + "tlp_header/components/Header.jsx");
<TLPHeader tlp={json}>

And the stylesheet which is available in the path tlp_header/components/css/tlpHeader.css have to go in webpack logic to bundle the css.

