import React from 'react';
import './Stars.css'; // Import the CSS file

const Stars = () => {
    return (
        <div className="starry-background">
            {/* Create multiple star elements */}
            {Array.from({ length: 200 }).map((_, index) => (
                <div key={index} className="star" />
            ))}
        </div>
    );
};

export default Stars;
