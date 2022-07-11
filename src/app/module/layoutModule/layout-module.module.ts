import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';

@NgModule({
    declarations:[
        FooterComponent,
        HeaderComponent
    ],
    imports:[
        BrowserModule,
    ],
    exports:[
        FooterComponent,
        HeaderComponent
    ]
})

export class LayoutModule { }