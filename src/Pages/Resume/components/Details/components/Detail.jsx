import React from 'react';
import DetailContainer from './DetailContainer';
import DetailHeader from './DetailHeader';
import DetailCard from './DetailCard';

const Detail = ({id, children}) => {
    return (
        <DetailContainer id={id}>

            <DetailHeader title={id}/>

            <DetailCard>
                {children}
            </DetailCard>

        </DetailContainer>
    );
}

export default Detail;
