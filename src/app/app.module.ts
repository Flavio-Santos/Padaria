import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { GerenteComponent } from './gerente/gerente.component';
import { Card,CardModule } from 'primeng/card';
import { VendedoresComponent } from './gerente/vendedores/vendedores.component';
import { VendasComponent } from './gerente/vendas/vendas.component';
import { EstoqueComponent } from './gerente/estoque/estoque.component';
import { MesaComponent } from './vendedor/mesa/mesa.component';
import { ProdutosComponent } from './vendedor/produtos/produtos.component';
import { VendaFechamentoComponent } from './vendedor/venda-fechamento/venda-fechamento.component';
import { GridComponent } from './myComponents/grid/grid.component';
import { HeaderComponent } from './myComponents/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VendedorComponent,
    GerenteComponent,
    VendedoresComponent,
    VendasComponent,
    EstoqueComponent,
    MesaComponent,
    ProdutosComponent,
    VendaFechamentoComponent,
    GridComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
