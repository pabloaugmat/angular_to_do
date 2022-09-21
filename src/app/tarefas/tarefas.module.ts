import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
