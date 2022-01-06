import React from 'react'
//import { connect } from 'react-redux'
//import {Button} from "antd";
//import { signOut } from 'redux/sagas/Auth';
// import { signOut } from 'redux/actions/Auth';
//import ErrorOne from 'views/auth-views/errors/error-page-1';
//import AnalyticDashboard from '../dashboard';
import ErrorTwo from 'views/auth-views/errors/error-page-2';
import SalesDashboard from '../dashboard';

const Home = () => {
	return (
		<div>
			<SalesDashboard></SalesDashboard>
			{/* <AnalyticDashboard></AnalyticDashboard> */}
			{/* Home component works!
			
			<Button onClick={e => signOut()}> Signout </Button> */}
			{/* <ErrorOne></ErrorOne> */}
			{/* <ErrorTwo></ErrorTwo> */}
		</div>
	)
}

export default Home
