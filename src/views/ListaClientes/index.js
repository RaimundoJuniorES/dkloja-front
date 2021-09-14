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
    const [clientes, setClientes] = useState([]);
    const [lateCount, setLateCount] = useState();

    var titulo = 'do dia';

    async function loadClientes(){
        await api.get(`/clients`)
        .then(response => {
            console.log(response.data.docs);
            setClientes(response.data.docs);
            
            console.log("clientes")
            console.log(clientes);
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

    async function Delete(idCliente){
        // console.log(idCliente)
        await api.delete(`/client/${idCliente}`)
        .then(response => {
            console.log(response.data)
            alert(response.data)
            loadClientes()

        })

    }

    useEffect(() => {
        loadClientes();
        lateVerify();
    }, [filterActived]);

    return (
        <S.Container>
            <Header lateCount = {lateCount} clickNotification={Notification}/>
        
            <S.Title>
                <h3>Lista de Clientes</h3>
            </S.Title>

            <S.Content>
            <table>
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th>Bairro</th>
                    <th>Rua</th>
                    <th>n°</th>
                    <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                {
                    clientes.map(c => (                        
                        <tr>
                            <td>{ c.name }</td>
                            <td>{ c.cpf }</td>
                            <td>{ c.telefone }</td>
                            <td>{ c.bairro }</td>
                            <td>{ c.rua }</td>
                            <td>{ c.numero }</td>
                            <td>
                                <Link to={`/cliente/${c._id}`}>
                                    <S.ButtonEditar>Editar</S.ButtonEditar>
                                </Link>
                                <S.ButtonExcluir onClick={() => Delete(c._id)}>Excluir</S.ButtonExcluir>
                            </td>
                        </tr>
                        // <Link to={`/sale/${v._id}`}>
                        //     <CobrancaCard dadosVenda={v}/>
                        // </Link>
                            
                    ))
                } 
                </tbody>
            </table>  
            </S.Content>
            
            <Footer />
        </S.Container>    
    );
}
  
export default Home;
  