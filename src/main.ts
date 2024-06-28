import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import routeConfig from "./app/app.routes";

bootstrapApplication(AppComponent,{
  providers:[
    provideHttpClient(),
    provideRouter(routeConfig),
  ]
}).catch((err) => console.error(err));
