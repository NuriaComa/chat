import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  loadChildren: () => import('./modules/login/login.module')
    .then(mod => mod.LoginModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./modules/chat/chat.module')
      .then(mod => mod.ChatModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
