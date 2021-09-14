import React, { useState, useEffect } from 'react';
import * as S from './style';

//importando o backend
import api from '../../services/api';

//nossos components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Venda({match}) {
    const [lateCount, setLateCount] = useState();
    const [nomeCliente, setNomeCliente] = useState();
    const [cpfCliente, setCpfCliente] = useState();
    const [telefoneCliente, setTelefoneCliente] = useState();
    const [bairroCliente, setBairroCliente] = useState();
    const [ruaCliente, setRuaCliente] = useState();
    const [numeroCliente, setNumeroCliente] =useState();

    async function loadClientDetails(){
        await api.get(`/client/${match.params.id}`)
        .then(response => {
            console.log(response.data)
            setNomeCliente(response.data.name)
            setCpfCliente(response.data.cpf)
            setTelefoneCliente(response.data.telefone)
            setBairroCliente(response.data.bairro)
            setRuaCliente(response.data.rua)
            setNumeroCliente(response.data.numero)
        })
    }

    async function lateVerify(){
        await api.get(`/cobranca/late`)
        .then(response => {
            setLateCount(response.data.length)  
        })
    }

    async function Save(){
        console.log("nomeCliente", nomeCliente)

        const body = {
            name: nomeCliente,
            cpf: cpfCliente,
            telefone: telefoneCliente, 
            bairro: bairroCliente,
            rua: ruaCliente, 
            numero: numeroCliente
        }

        console.log("body ", body)

        if(!body.name || !body.cpf || !body.telefone || !body.bairro || !body.rua || !body.numero){
            alert('Preencha todos os campos!')
        }else{
            console.log(body)

            await api.post('/client', body) 
            .then((result) => {
                console.log('retorno: ', result)
                if(!result.data.status){
                    alert(result.data.msg)
                }else{
                    alert(result.data.msg)
                }
            })  
            .catch((error) => {
                alert(error)
            }) 
    } 
    }

    useEffect(() => {
        lateVerify();
        loadClientDetails();
    }, []);

    return (
        <S.Container>
            <Header lateCount = {lateCount} clickNotification={Notification}/>
            {match.params.id 
                ? <h2>Detalhes do Cliente</h2> 
                : <h2>Cadastro de Cliente</h2>
            }
            <S.Form>
                <S.Input>
                    <label for="nome">Nome:</label>
                    <input id="nome" type="text" placeholder="Digite o nome do cliente" onChange={e => setNomeCliente(e.target.value)} value={nomeCliente}/>
                </S.Input>

                <S.Input>
                    <label for="cpf">CPF:</label>
                    <input id="cpf" type="text" placeholder="Digite o cpf do cliente" onChange={e => setCpfCliente(e.target.value)} value={cpfCliente}/>
                </S.Input>

                <S.Input>
                    <label for="telefone">Telefone:</label>
                    <input id="telefone" type="tel" placeholder="Digite o telefone do cliente" onChange={e => setTelefoneCliente(e.target.value)} value={telefoneCliente}/>
                </S.Input>

                <S.Input>
                    <label for="bairro">Bairro:</label>
                    <input id="bairro" type="tel" placeholder="Digite o Bairro do cliente" onChange={e => setBairroCliente(e.target.value)} value={bairroCliente}/>
                </S.Input>

                <S.Input>
                    <label for="rua">Rua:</label>
                    <input id="rua" type="tel" placeholder="Digite a rua do cliente" onChange={e => setRuaCliente(e.target.value)} value={ruaCliente}/>
                </S.Input>

                <S.Input>
                    <label for="numero">Número:</label>
                    <input id="numero" type="tel" placeholder="Digite o número da casa" onChange={e => setNumeroCliente(e.target.value)} value={numeroCliente}/>
                </S.Input>

                <S.Save>
                    <button type="button"  onClick={Save}>SALVAR</button>
                </S.Save>
            </S.Form>
            <Footer />
        </S.Container>    
    );
}
  
export default Venda;
  