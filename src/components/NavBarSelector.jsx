import React from 'react'

function NavBarSelector() {
    return (
        <div>
            <svg width="200" height="200" viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                <ellipse cx="100%" cy="100%" rx="50" ry="10" stroke-width="2" stroke="blue" fill="transparent" />
                <path d="M160,100 L150,115 L170,115 L155,130 L165,150 L150,140 L135,150 L145,130 L130,115 L150,115 Z"
                    fill="orange" stroke="black" stroke-width="2" />
            </svg>
        </div>
    )
}

export default NavBarSelector
