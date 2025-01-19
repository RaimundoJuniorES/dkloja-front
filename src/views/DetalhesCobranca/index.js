import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

function Venda() {
    const params = useParams();
    const [lateCount, setLateCount] = useState();
    const [sale, setSale] = useState({});
    const [paymentValue, setPaymentValue] = useState(0);
    const [paymentList, setPaymentList] = useState([]);

    async function lateVerify() {
        await api.get(`/cobranca/late`)
        .then(response => {
            setLateCount(response.data.length)
        })
    }

    async function loadSaleDetails() {
        await api.get(`/sale/${params.id}`)
            .then(response => {
                // console.log(response.data)
                setSale({ 
                    ...response.data,
                    createdAt: format(new Date(response.data.createdAt), 'dd/MM/yyyy'),
                    dataCobranca: format(new Date(response.data.dataCobranca), 'dd/MM/yyyy')
                });
                // setType(response.data.type)
                // setNomeCliente(response.data.name)
                // setValue(response.data.value)
                // setDescricao(response.data.description)
                // setData(format(new Date(response.data.createdAt), 'yyyy-mm-dd'))
                // console.log('data', data)
                // setHora(format(new Date(response.data.createdAt), 'HH:mm'))
            })
    }

    async function loadPaymentList() {
        await api.get(`/payment`)
            .then(response => {
                console.log(response.data)
                setPaymentList(response.data);
            })
    }

    async function savePayment() {
        if (+paymentValue) {
            const body = {
                saleId: sale._id,
                value: paymentValue
            }
            await api.post(`/payment`, body)
                .then(async ({data: { msg } }) => {
                    alert(msg);
                    await loadPaymentList()
                })
        } else {
            alert('Informe um valor valido!')
        }
    }

    useEffect(() => {
        lateVerify();
        params?.id && loadSaleDetails();
        params?.id && loadPaymentList();
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
            <div className="content">
            <div class="saleDetail">
                <h2>Detalhes da Venda</h2>
                <S.SaleDetail>
                    <div className="details">
                        <span>Nome Cliente: {sale.clientName}</span><br />
                        <span>Descrição: {sale.description}</span><br />
                        <span>Valor da Compra: {sale.value}</span><br />
                        <span>Data da Compra: {sale.createdAt}</span><br />
                        <span>Data da Cobrança: {sale.dataCobranca}</span><br />
                        <span>Total Pago: {sale.amountPaid}</span><br />
                        <span>Valor em Débito: {sale.value - sale.amountPaid}</span>
                    </div>
                    <div>
                        <input type="number" onChange={(e) => setPaymentValue(e.target.value)}></input><button onClick={() => savePayment()}>Realizar pagamento</button>
                    </div>
                </S.SaleDetail>
            </div>
            <div className="paymentTable">
                <h2>Lista de Pagamentos</h2>
                <S.PaymentTable>
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nº</th>
                                    <th>Valor</th>
                                    <th>Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paymentList.map((payment, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{payment.value}</td>
                                            <td>{format(new Date(payment.createdAt), 'dd/MM/yyyy')}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </>
                </S.PaymentTable>
            </div>        
            </div>
            <Footer />
        </S.Container>    
    );
}
  
export default Venda;
  