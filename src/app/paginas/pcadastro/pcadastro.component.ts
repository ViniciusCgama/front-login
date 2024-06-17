import { Component, } from '@angular/core';
import { LoginComponent } from '../../componente/login/login.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InformacoesComponent } from '../../componente/informacoes/informacoes.component';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface PcadastroForm{
  name: FormControl,
  email: FormControl,
  password: FormControl,
  confirmapassword: FormControl
}

@Component({
  selector: 'app-pcadastro',
  standalone: true,
  imports: [LoginComponent,
    ReactiveFormsModule,
    InformacoesComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './pcadastro.component.html',
  styleUrl: './pcadastro.component.css'
})
export class PcadastroComponent {

  pcadastroForm!: FormGroup<PcadastroForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
    this.pcadastroForm = new FormGroup ({
      name:new FormControl ('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      confirmapassword: new FormControl ('', [Validators.required, Validators.minLength(8)]),
    })

  }

  submit(){
     this.loginService.entrar(this.pcadastroForm.value.email, this.pcadastroForm.value.password).subscribe({
      next: () => this.toastService.success("Login feito com sucesso"),
      error: () => this.toastService.error("Algo deu errado")
     })
  }

  navigate(){
    this.router.navigate(["login"])
  }

}



