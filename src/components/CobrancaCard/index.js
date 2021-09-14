import React, { useMemo } from 'react';
import * as S from './style.js';
import TypeIcons from '../../utils/typeIcons';
import { format } from 'date-fns' 

function CobrancaCard( { dadosVenda } ) {
    let { idClient, name, type, value, description, remains, createdAt, dataCobranca } = dadosVenda

    const date = useMemo(() =>  format(new Date(dataCobranca), 'dd/MM/yyyy'))

    return (
        <S.Container >
            <S.TopCard>
                <img src={TypeIcons[type].icon} alt="Icone Cobranca" />
                <strong>  { name }  </strong>

            </S.TopCard>  
            <S.BottomCard>
                <strong>{ date }</strong>
                {/* <span>{ hour }</span> */}
            </S.BottomCard>
        </S.Container>
    )
}
  
export default CobrancaCard;
  