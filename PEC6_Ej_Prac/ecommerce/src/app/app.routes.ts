import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';


const routes: Routes = [
    {
        path: '',
        component: ArticleListComponent,
        title: 'Home Page',
    },

    {
        path: 'newArticleTemplate',
        component: ArticleNewTemplateComponent,
        title: 'ArticleNewTemplate'
    },

    {
        path: 'newArticleReactive',
        component: ArticleNewReactiveComponent,
        title: 'newArticleReactive'
    }
];

export const routing = RouterModule.forRoot(routes);