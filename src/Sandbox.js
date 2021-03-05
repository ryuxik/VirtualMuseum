import React from 'react';
import Collection from './Collection';

function SandBox(props) {
    return (
        <div className="sand-box">
            {console.log(props.collections)}
            {props.isFetching
                ? ("loading...")
                : (props.collections.map((collection) =>
                    <Collection
                        key={collection.id}
                        name={collection.name}
                        exhibits={collection.exhibits} />))
            }
        </div>
    );
}
export default SandBox;