import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Screens/Home';
import Form_C1_Monthly from '../Screens/Form_C1_Monthly';
import Form_C1_Contact from '../Screens/Form_C1_Contact';
import Form_C1_Address from '../Screens/Form_C1_Address';
import Form_C1_Payment from '../Screens/Form_C1_Payment';
import Form_C1_Done from '../Screens/Form_C1_Done';
import Form_C2_Monthly from '../Screens/Form_C2_Monthly';

const Index = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/form_c1_monthly' component={Form_C1_Monthly} />
				<Route exact path='/form_c1_contact' component={Form_C1_Contact} />
				<Route exact path='/form_c1_address' component={Form_C1_Address} />
				<Route exact path='/form_c1_payment' component={Form_C1_Payment} />
				<Route exact path='/form_c1_done' component={Form_C1_Done} />
				<Route exact path='/form_c2_monthly' component={Form_C2_Monthly} />
			</Switch>
		</div>
	);
};

export default Index;
