import { Routes } from '@angular/router';
import { PloginComponent } from './paginas/plogin/plogin.component';
import { PcadastroComponent } from './paginas/pcadastro/pcadastro.component';


export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},

    {
        path: "login",
        component: PloginComponent,

    },
    {
        path: "cadastro",
        component: PcadastroComponent,
    }
];
