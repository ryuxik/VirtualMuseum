import React, { useEffect, useState } from 'react';
import Collection from './Collection';

const SandBox = (props) => {
    const { collectionList, fetchingCollectionList } = props;

    const [sandBoxState, setSandBoxState] = useState({
        collectionLoaded: new Map(),
        collectionResource: new Map(),
    })

    useEffect(() => {
        const collectionResourceBaseUrl = '/collection/';
        let isMounted = true;
        collectionList.forEach((value) => {
            let collectionResourceUrl = collectionResourceBaseUrl + value.id;
            fetch(collectionResourceUrl)
                .then(res => res.json())
                .then(collection => {
                    if (isMounted) {
                        setSandBoxState((state) => {
                            return {
                                collectionLoaded: state.collectionLoaded.set(collection.id, true),
                                collectionResource: state.collectionResource.set(collection.id, collection.exhibits)
                            }
                        });
                    }
                });
        });
        return () => { isMounted = false };
    }, [setSandBoxState, collectionList]);

    return (
        <div className="sand-box">
            { fetchingCollectionList
                ? <div>Loading Collections</div>
                : collectionList.map((collection) =>
                    <Collection
                        key={collection.id}
                        name={collection.name}
                        displayExhibits={true}
                        exhibitsLoaded={sandBoxState.collectionLoaded.get(collection.id)}
                        exhibits={sandBoxState.collectionResource.get(collection.id)} />)
            }
        </div>
    );
}
export default SandBox;