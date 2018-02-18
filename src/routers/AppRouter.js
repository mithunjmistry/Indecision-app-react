import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';

const Header = () => (
  <header>
      <h1>Portfolio</h1>
      <NavLink to="/" activeClassName="link-active" exact={true}>Home</NavLink>
      <NavLink to="/portfolio" activeClassName="link-active" exact={true}>Portfolio</NavLink>
      <NavLink to="/help" activeClassName="link-active">Help</NavLink>
  </header>
);

const homePage = () => (
  <div>
      <p>This is the home page.</p>
  </div>
);

const portfolioPage = () => (
    <div>
        <p>This is the portfolio page.</p>
        <Link to="/portfolio/1">Portfolio 1</Link>
        <br />
        <Link to="/portfolio/2">Portfolio 2</Link>
    </div>
);

const portfolioArticlePage = (props) => (
    <div>
        <p>This is the portfolio article {props.match.params.id}.</p>
    </div>
);

const helpPage = () => (
    <div>
        <p>This is the help page.</p>
    </div>
);

const noMatchFound = () => (
    <div>
        404! No page found.
        <br />
        <Link to="/">Go home</Link>
    </div>
);

const appRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={homePage} exact={true} />
                <Route path="/portfolio" component={portfolioPage} exact={true} />
                <Route path="/portfolio/:id" component={portfolioArticlePage} />
                <Route path="/help" component={helpPage} />
                <Route component={noMatchFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default appRouter;