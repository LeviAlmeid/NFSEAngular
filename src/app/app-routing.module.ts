import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NfseComponent } from './nfse/nfse.component';

const routes: Routes = [{
  path: 'nfse', component: NfseComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
