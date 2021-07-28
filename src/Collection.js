import React from 'react';
import Exhibit from './Exhibit';

const Collection = (props) => {
    const { name, displayExhibits, exhibitsLoaded, exhibits } = props;

    return (
        <div className="collection">
            <div className="collection-name">
                {name}
            </div>
            {(displayExhibits === true && exhibitsLoaded === true)
                ? <div className="collection-exhibits">
                    {exhibits.map((e) =>
                        <Exhibit key={e.id} name={e.name} id={e.id} />
                    )}
                </div>
                : <div className="collection-denied"> You do not have permission to view these exhibits. </div>
            }
        </div>
    );
}

export default Collection;