import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './content/header/header.component';
import { FooterComponent } from './content/footer/footer.component';
import { AboutComponent } from './component/home/about/about.component';
import { HistoryComponent } from './component/home/history/history.component';
import { CattleComponent } from './component/cattle/cattle.component';
import { NurtureComponent } from './component/cattle/nurture/nurture.component';
import { GeneticsComponent } from './component/cattle/genetics/genetics.component';
import { CertificatesComponent } from './component/certificates/certificates.component';
import { ContactComponent } from './component/contact/contact.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HistoryComponent,
    CattleComponent,
    NurtureComponent,
    GeneticsComponent,
    CertificatesComponent,
    ContactComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
