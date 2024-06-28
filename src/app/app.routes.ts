import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddAccountComponent } from './add-account/add-account.component';

const routeConfig: Routes = [
    {
        path:'',
        component: HomePageComponent,
        title: 'Home Page'
    },
    {
        path:'home-page',
        component: HomePageComponent,
        title: 'Home Page'
    },
    {
        path:'contact-us',
        component: ContactUsComponent,
        title: 'Contact Us'
    },
    {
        path:'person-list',
        component: PersonListComponent,
        title: 'Person List'
    },
    {
        path:'login-page',
        component: LoginPageComponent,
        title: 'Login Page'
    },
    {
        path:'create-person',
        component: AddPersonComponent,
        title: 'Add Person'
    },
    {
        path:'create-account/:id',
        component: AddAccountComponent,
        title: 'Add Account'
    },
    {
        path:'person-details/:id',
        component: PersonDetailsComponent,
        title: 'Person Details'
    },
    {
        path:'account-details/:id/:id2',
        component: AccountDetailsComponent,
        title: 'Account Details'
    },
    {
        path:'about-us',
        component: AboutUsComponent,
        title: 'About Us'
    },
];

export default routeConfig;

