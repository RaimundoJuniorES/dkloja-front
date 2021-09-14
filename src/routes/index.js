import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import Sale from '../views/CriarVenda';
import Cliente from '../views/Cliente';
import ListaClientes from '../views/ListaClientes';

export default function Routes(){
    return(
         <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/cliente" exact component={Cliente} />
                <Route path="/cliente/:id" exact component={Cliente} />
                <Route path="/sale" exact component={Sale}/>
                <Route path="/sale/:id" exact component={Sale}/>
                <Route path="/listaClientes" exact component={ListaClientes}/>
            </Switch>
        </BrowserRouter>
    )
}