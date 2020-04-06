import React, { useEffect } from 'react';
import useDomain from '../hooks/useDomain';

const Characters = () => {
    const { loading, data, executeUseCase } = useDomain('list_all_characters');

    useEffect(() => {
        executeUseCase();
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {loading && <p>Loading characters...</p>}
            {data &&
                data.map(character => (
                    <div key={character.id}>
                        <img src={character.image} alt={character.name} />
                        {character.name}
                    </div>
                ))}
        </div>
    );
};

export default Characters;
