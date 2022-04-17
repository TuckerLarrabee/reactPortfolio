import React, {useState} from 'react';



function Nav (props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

console.log(currentCategory)

    return (
        <nav>
            <ul className='flex-row'>
                {categories.map((category) => (
                    <li
                        className={`mx-2 ${
                            currentCategory.name === category.name && !contactSelected && 'navActive'
                        }`}
                        key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category);
                                    setContactSelected(false);
                                }}
                            >
                                {category.name}
                            </span>
                        </li>
                ))}
                {/* <li className={`mx-2 ${!contactSelected && 'navActive'}`}>    
                    <span onClick={() => setContactSelected(false)}> 
                    Portfolio
                    </span>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>    
                    <span onClick={() => {
                        setContactSelected(true);
                        setCurrentCategory(category)}}> 
                    Contact
                    </span>
                </li>
                <li className={`mx-2 ${!contactSelected && 'navActive'}`}>    
                    <span onClick={() => setContactSelected(false)}> 
                    Resume
                    </span>
                </li> */}
                
            </ul>
        </nav>
    )
}

export default Nav;
