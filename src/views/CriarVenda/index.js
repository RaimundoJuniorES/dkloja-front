import React, { useState, useEffect } from 'react';
import Select from 'react-select'
// import CurrencyInput from 'react-currency-input';
import CurrencyInput from 'react-currency-input-field';
import { format } from 'date-fns';
import * as S from './style';

//importando o backend
import api from '../../services/api';

//nossos components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

function Venda({match}) {
    const [clientes, setClientes] = useState();
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    const [cliente, setCliente] = useState({_id:'', name:''});
    const [done, setDone] = useState(false);
    const [nomeCliente, setNomeCliente] = useState();
    const [descricao, setDescricao] = useState();
    const [value, setValue] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();

    async function getClientes(){
        await api.get(`/clients`)
        .then(response => {
            const options = response.data.docs.map((c) => {
                return {value: c, label: `${c.name} - ${c.cpf}` }
            })
            setClientes(options)          
        })
    }

    async function loadSaleDetails(){
        await api.get(`/sale/${match.params.id}`)
        .then(response => {
            console.log(response.data)
            setType(response.data.type)
            setNomeCliente(response.data.name)
            setValue(response.data.value)
            setDescricao(response.data.description)
            setData(format(new Date(response.data.createdAt), 'yyyy-mm-dd'))
            console.log('data', data)
            setHora(format(new Date(response.data.createdAt), 'HH:mm'))
        })
    }

    async function lateVerify(){
        await api.get(`/cobranca/late`)
        .then(response => {
            setLateCount(response.data.length)
        })
    }

    async function Save(){

        const body = {
            idClient: cliente._id,
            name: cliente.name,
            type: type,
            value: value,
            remains: value,
            description: descricao,
            dataCobranca: `${data}T${hora}:00.000Z`
        }

        if(!body.idClient || !body.name || !body.type || !body.value || !body.remains || !body.description || !data || !hora){
            showAlert('Preencha todos os campos!')
        }else{
            console.log(body)

            await api.post('/sale', body) 
            .then((result) => {
                console.log('retorno: ', result)
                if(result.data.msg){
                    alert(result.data.msg)
                }else{
                    showAlert("Venda Cadastrada com Sucesso!!!")
                }
            })  
            .catch((error) => {
                showAlert(error)
            }) 
    }

    function showAlert(msg){
        alert(msg)
    }           
    }

    useEffect(() => {
        getClientes();
        lateVerify();
        loadSaleDetails();
    }, []);

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            color: state.selectProps.menuColor,
        }),

        control: (_, { selectProps: { width }}) => ({
            width: '100%',
            display: 'flex',
            border: '1px solid #EE6B26',
            borderRadius: '10px',
            fontSize: '16px'
        }),

        singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
        }
    }

    return (
        <S.Container>
            <Header lateCount = {lateCount} clickNotification={Notification}/>
            {match.params.id 
                ? <h2>Detalhes da Venda</h2> 
                : <h2>Cadastro de Vendas</h2>
            }
            <S.Form>
                <label>Tipo de Venda:</label>
                <S.TypeIcons>
                    {
                        TypeIcons.map((icon, index) => (
                            index > 0 && 
                            <button type="button" onClick={() => setType(index)} >
                                <img src={icon.icon} alt="Tipo de Tarefa" title={icon.name} className={type && type == index ? 'actived' : 'inative'}/>
                            </button>    
                        ))
                    }
                </S.TypeIcons>
                
                <S.Input>
                    <label for="cliente">Cliente:</label>
                    {match.params.id 
                        ? <input id="cliente" options={clientes} onChange={e => setCliente(e.value)} styles={customStyles} placeholder="Nome do Cliente" value={nomeCliente}></input> 
                        : <Select id="cliente" options={clientes} onChange={e => setCliente(e.value)} styles={customStyles} placeholder="Nome do Cliente" value={nomeCliente}></Select>
                    }
                </S.Input>

                <S.Input>
                    <label for="valor">Valor:</label>
                    <CurrencyInput decimalSeparator="," groupSeparator="." decimalsLimit={2} prefix="R$ " onValueChange={e => setValue(e)} placeholder="R$ 00.00" value={value}/>
                </S.Input>

                <S.TextArea>
                    <label for="descricao">Descrição:</label>
                    <textarea id="descricao" rows={5} type="teste" placeholder="Detalhes da Venda" onChange={e => setDescricao(e.target.value)} value={descricao}></textarea>
                </S.TextArea>

                <S.InputData>
                    <S.Input>
                        <label for="data">Data:</label>
                        <input id="data" type="date" onChange={e => setData(e.target.value)} value={data}/>
                    </S.Input>

                    <S.Input>
                        <label for="hora">Hora:</label>
                        <input id="hora" type="time" onChange={e => setHora(e.target.value)} value={hora}/>
                    </S.Input>

                </S.InputData>

                {match.params.id && 
                    <S.Options>
                        <div>
                        <input type="checkbox"  checked={done} onChange={() => setDone(!done)}/>              
                        <span>CONCLUÍDO</span>
                        </div>
                        <button type="button">EXCLUIR</button>
                    </S.Options>
                }

                <S.Save>
                    <button type="button"  onClick={Save}>SALVAR</button>
                </S.Save>
            </S.Form>
            <Footer />
        </S.Container>    
    );
}
  
export default Venda;
  