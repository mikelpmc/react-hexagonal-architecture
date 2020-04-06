import domain from '../../domain';
import { useState, useCallback } from 'react';

const useDomain = useCase => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const executeUseCase = useCallback(
        async paramsUsecase => {
            setLoading(true);
            setData(null);

            const data = await domain.get(useCase).execute(paramsUsecase);

            setData(data);
            setLoading(false);
        },
        [useCase]
    );

    return { loading, data, executeUseCase };
};

export default useDomain;
