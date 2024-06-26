import React from 'react';
import { ReactCountryDropdown } from 'react-country-dropdown';
import 'react-country-dropdown/dist/index.css';

function CitiesOption() {
    const handleSelect = (country) => {
        
          
        
        console.log(country)
        /* returns the details on selected country as an object
            {
              name: "United States of America", 
              code: "US", 
              capital: "Washington, D.C.", 
              region: "Americas", 
              latlng: [38, -97]
            }
        */
      }
      return (
        <div>
          <ReactCountryDropdown onSelect={handleSelect} countryCode='IN' />
        </div>
      )
}

export default CitiesOption