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
            <ul className='flex-row' style={{margin: 0}}>
                {categories.map((category) => (
                    <li
                        className={`mx-2 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                            <a href={`#`+category.name} onClick={() => {setCurrentCategory(category); setContactSelected(false);}}>
                                {category.name}
                            </a>
                        </li>
                ))}            
            </ul>
        </nav>
    )
}

export default Nav;
