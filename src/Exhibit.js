import React, { useState } from 'react';

function Exhibit(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    function flipExhibit() {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className="exhibit" onClick={flipExhibit}>
            {isFlipped ? props.id : props.name}
        </div>
    );
}

export default Exhibit;