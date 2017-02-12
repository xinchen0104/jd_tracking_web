/**
 * Created by pcpulabfed on 2/9/17.
 */
import { Routes, RouterModule }  from '@angular/router';
import { Demo } from './demo.component';

const routes: Routes = [
    {
        path: '',
        component: Demo
    }
];

export const routing = RouterModule.forChild(routes);
