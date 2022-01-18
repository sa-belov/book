import MainPage from '../MainPage/MainPage';
import BookPage from '../BookPage/BookPage';

interface IRoute {
  id: string;
  name: string;
  path: string;
  component: any;
}

const appRoutes: IRoute[] = [
  { id: 'main', name: 'Main', path: '/', component: MainPage },
  { id: 'bookTable', name: 'Book table', path: '/books', component: BookPage },
];

export default appRoutes;
