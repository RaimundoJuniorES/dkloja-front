import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Home from '../views/Home';
import Sale from '../views/CriarVenda';
import SaleDetail from '../views/DetalhesCobranca';
import Cliente from '../views/Cliente';
import ListaClientes from '../views/ListaClientes';

export default function RouteList(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cliente" element={<Cliente />} />
                <Route path="/cliente/:id" element={<Cliente />} />
                <Route path="/sale" element={<Sale />}/>
                <Route path="/sale/:id" element={<SaleDetail />}/>
                <Route path="/listaClientes" element={<ListaClientes />}/>
            </Routes>
        </BrowserRouter>
    )
}