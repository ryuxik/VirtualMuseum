import React from 'react';
import Exhibit from './Exhibit';

function Collection(props) {

    return (
        <div className="collection">
            <div className="collection-name">
                {props.name}
            </div>
            <div className="collection-exhibits">
                {props.exhibits.map((e) =>
                    <Exhibit key={e.id} name={e.name} id={e.id} />
                )}
            </div>
        </div>
    );
}

export default Collection;