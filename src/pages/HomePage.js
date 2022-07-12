
import React, { useState } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "routes";

// pages
import Presentation from "pages/Presentation";
import DashboardOverview from "pages/dashboard/DashboardOverview";
import DashboardTraffic from "pages/dashboard/DashboardTraffic";
import DashboardProductAnalysis from "pages/dashboard/DashboardProductAnalysis";
import Kanban from 'pages/Kanban';
import Messages from "pages/Messages";
import SingleMessage from "pages/SingleMessage";
import Users from "pages/Users";
import Transactions from "pages/Transactions";
import Tasks from "pages/Tasks";
import Settings from "pages/Settings";
import Calendar from "pages/Calendar";
import MapPage from "pages/Map";
import Datatables from "pages/tables/Datatables";
import BootstrapTables from "pages/tables/BootstrapTables";
import Pricing from "pages/examples/Pricing";
import Billing from "pages/examples/Billing";
import Invoice from "pages/examples/Invoice";
import Signin from "pages/examples/Signin";
import Signup from "pages/examples/Signup";
import ForgotPassword from "pages/examples/ForgotPassword";
import ResetPassword from "pages/examples/ResetPassword";
import Lock from "pages/examples/Lock";
import Widgets from "pages/examples/Widgets";
import NotFoundPage from "pages/examples/NotFound";
import ServerError from "pages/examples/ServerError";

import Profile from "pages/Profile";
import Accounts from "pages/Accounts";
import ConnectedApps from 'pages/ConnectedApps';

// documentation pages
import DocsOverview from "pages/documentation/DocsOverview";
import DocsDownload from "pages/documentation/DocsDownload";
import DocsQuickStart from "pages/documentation/DocsQuickStart";
import DocsLicense from "pages/documentation/DocsLicense";
import DocsFolderStructure from "pages/documentation/DocsFolderStructure";
import DocsBuild from "pages/documentation/DocsBuild";
import DocsChangelog from "pages/documentation/DocsChangelog";

// plugin pages
import PluginCharts from "pages/plugins/Charts";
import PluginCalendar from "pages/plugins/Calendar";
import PluginDatatable from "pages/plugins/Datatable";
import PluginMap from "pages/plugins/Map";
import PluginDropzone from "pages/plugins/Dropzone";
import PluginSweetAlert from "pages/plugins/SweetAlert";

// components
import Sidebar from 'components/Sidebar';
import Topbar from 'components/Topbar';
import Footer from 'components/Footer';

import Accordion from "pages/components/Accordion";
import Alerts from "pages/components/Alerts";
import Badges from "pages/components/Badges";
import Breadcrumbs from "pages/components/Breadcrumbs";
import Buttons from "pages/components/Buttons";
import Forms from "pages/components/Forms";
import Modals from "pages/components/Modals";
import Navs from "pages/components/Navs";
import Navbars from "pages/components/Navbars";
import Pagination from "pages/components/Pagination";
import Popovers from "pages/components/Popovers";
import Progress from "pages/components/Progress";
import Tables from "pages/components/Tables";
import Tabs from "pages/components/Tabs";
import Tooltips from "pages/components/Tooltips";
import Toasts from "pages/components/Toasts";
import WidgetsComponent from "pages/components/Widgets";



const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const resize = () => {
    var resize = setInterval(() => {
      window.dispatchEvent(new Event('resize'));
    }, 10);
    setTimeout(function () {
      clearInterval(resize);
    }, 301);
  }

  const localStorageIsContracted = () => {
    return localStorage.getItem('sidebarContracted') === 'false' ? false : true
  }

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [contracted, setContracted] = useState(localStorageIsContracted());
  const [contractSidebar, setContractSidebar] = useState(localStorageIsContracted());
  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleMouseOver = () => {
    if (contracted) {
      setContractSidebar(!contractSidebar);
    }
    resize();
  };

  const toggleContracted = () => {
    setContracted(!contracted);
    setContractSidebar(!contracted);
    localStorage.setItem('sidebarContracted', !contracted);
    resize();
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Sidebar
          contracted={contractSidebar}
          onMouseEnter={toggleMouseOver}
          onMouseLeave={toggleMouseOver}
        />

        <main className="content">
          <Topbar toggleContracted={toggleContracted} />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <Route exact path={Routes.Presentation.path} component={Presentation} />
    <Route exact path={Routes.Signin.path} component={Signin} />
    <Route exact path={Routes.Signup.path} component={Signup} />
    <Route exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <Route exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <Route exact path={Routes.Lock.path} component={Lock} />
    <Route exact path={Routes.NotFound.path} component={NotFoundPage} />
    <Route exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.DashboardTraffic.path} component={DashboardTraffic} />
    <RouteWithSidebar exact path={Routes.DashboardProductAnalysis.path} component={DashboardProductAnalysis} />
    <RouteWithSidebar exact path={Routes.Kanban.path} component={Kanban} />
    <RouteWithSidebar exact path={Routes.Messages.path} component={Messages} />
    <RouteWithSidebar exact path={Routes.SingleMessage.path} component={SingleMessage} />
    <RouteWithSidebar exact path={Routes.Users.path} component={Users} />
    <RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />
    <RouteWithSidebar exact path={Routes.Tasks.path} component={Tasks} />
    <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
    <RouteWithSidebar exact path={Routes.Calendar.path} component={Calendar} />
    <RouteWithSidebar exact path={Routes.Map.path} component={MapPage} />
    <RouteWithSidebar exact path={Routes.Datatables.path} component={Datatables} />
    <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} />
    <RouteWithSidebar exact path={Routes.Pricing.path} component={Pricing} />
    <RouteWithSidebar exact path={Routes.Billing.path} component={Billing} />
    <RouteWithSidebar exact path={Routes.Invoice.path} component={Invoice} />

    <RouteWithSidebar exact path={Routes.Profile.path} component={Profile} />
    <RouteWithSidebar exact path={Routes.Accounts.path} component={Accounts} />
    <RouteWithSidebar exact path={Routes.ConnectedApps.path} component={ConnectedApps} />

    {/* components */}
    <RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />
    <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
    <RouteWithSidebar exact path={Routes.Widgets.path} component={Widgets} />
    <RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
    <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
    <RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />
    <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />
    <RouteWithSidebar exact path={Routes.WidgetsComponent.path} component={WidgetsComponent} />

    {/* documentation */}
    <RouteWithSidebar exact path={Routes.DocsOverview.path} component={DocsOverview} />
    <RouteWithSidebar exact path={Routes.DocsDownload.path} component={DocsDownload} />
    <RouteWithSidebar exact path={Routes.DocsQuickStart.path} component={DocsQuickStart} />
    <RouteWithSidebar exact path={Routes.DocsLicense.path} component={DocsLicense} />
    <RouteWithSidebar exact path={Routes.DocsFolderStructure.path} component={DocsFolderStructure} />
    <RouteWithSidebar exact path={Routes.DocsBuild.path} component={DocsBuild} />
    <RouteWithSidebar exact path={Routes.DocsChangelog.path} component={DocsChangelog} />

    {/* plugins */}
    <RouteWithSidebar exact path={Routes.PluginCharts.path} component={PluginCharts} />
    <RouteWithSidebar exact path={Routes.PluginCalendar.path} component={PluginCalendar} />
    <RouteWithSidebar exact path={Routes.PluginDatatable.path} component={PluginDatatable} />
    <RouteWithSidebar exact path={Routes.PluginMap.path} component={PluginMap} />
    <RouteWithSidebar exact path={Routes.PluginDropzone.path} component={PluginDropzone} />
    <RouteWithSidebar exact path={Routes.PluginSweetAlert.path} component={PluginSweetAlert} />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
