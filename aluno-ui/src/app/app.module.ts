import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';

import {MdButtonModule, MdCheckboxModule, MatInputModule, MatSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material';
import { AlunoService } from './aluno.service';
import { Http } from '@angular/http';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlunoCadastroComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    MdButtonModule, MdCheckboxModule, MatTableModule, MatInputModule, MatSelectModule,
    HttpClientModule, HttpModule
  ],
  providers: [
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
