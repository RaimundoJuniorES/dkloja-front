import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

//importando o backend
import api from '../../services/api';

//nossos components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import CobrancaCard from '../../components/CobrancaCard';

function Home() {
    const [filterActived, setFilterActived] = useState('today');
    const filterTraducao = {all: '', today: 'de Hoje', week: 'da Semana', month: 'do Mês', year: 'do Ano', late: 'Atrasadas'}
    const [cobrancas, setCobrancas] = useState([]);
    const [lateCount, setLateCount] = useState();

    var titulo = 'do dia';

    async function loadCobrancas(){
        // await api.get(`/cobranca/${filterActived}`)
        // .then(response => {
        //     console.log(response.data);
        //     setCobrancas(response.data);
            
        //     console.log("cobrancas")
        //     console.log(cobrancas);
        // })

        await api.get(`/sales`).then(response => {
            console.log(response.data)
            setCobrancas(response.data);

        })
    };

    async function lateVerify(){
        await api.get(`/cobranca/late`)
        .then(response => {
            setLateCount(response.data.length)
            console.log('lateCount')
            console.log(response.data.length)
            console.log(lateCount)            
        })
    }

    function Notification(){
        console.log('late')
        setFilterActived('late')
    }

    useEffect(() => {
        //lateVerify();
        loadCobrancas();
        lateVerify();
    }, [filterActived]);

    return (
        <S.Container>
            <Header lateCount = {lateCount} clickNotification={Notification}/>
        
            <S.FilterArea>
                <button type="button" onClick={() => setFilterActived("all") }>
                    <FilterCard title="Todos" actived={filterActived == 'all'} />
                </button>
                <button type="button" onClick={() => setFilterActived("today")}>
                    <FilterCard title="Hoje" actived={filterActived == 'today'} />
                </button>
                <button type="button" onClick={() => setFilterActived("week")}>
                    <FilterCard title="Semana" actived={filterActived == 'week'} />
                </button>
                <button type="button" onClick={() => setFilterActived("month")}>
                    <FilterCard title="Mês" actived={filterActived == 'month'} />
                </button>
                <button type="button" onClick={() => setFilterActived("year")}>
                    <FilterCard title="Ano" actived={filterActived == 'year'} />
                </button>      
            </S.FilterArea>

            <S.Title>
                <h3>Cobranças {filterTraducao[filterActived]}</h3>
            </S.Title>

            <S.Content>
                {
                    cobrancas.map(v => (
                        <Link to={`/sale/${v._id}`}>
                            <CobrancaCard dadosVenda={v}/>
                        </Link>
                            
                    ))
                }         
            </S.Content>
            
            <Footer />
        </S.Container>    
    );
}
  
export default Home;
  