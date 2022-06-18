/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 import React from 'react';
 import ReactDOM from 'react-dom';
 import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
 
import { homeRoutes } from './src/HomeRoutes';

 function App(){
     return(
         <BrowserRouter>
            <Routes>
                <Route path="/">
                {
                    homeRoutes.map(route => (
                        <Route key={route.path} path={route.path} element={route.children} />
                    ))
                }
                </Route>
            </Routes>
         </BrowserRouter>
     )
 }
 
 if (document.getElementById('app')) {
     ReactDOM.render(<App />, document.getElementById('app'));
 }
