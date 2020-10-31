import React, { Component } from 'react';
import { Breadcrumb } from 'matx';
import SimpleForm from '../material-kit/forms/AppForm';
import { SimpleCard } from 'matx';
import AppSnackbar from '../material-kit/snackbar/AppSnackbar';
import AppExpansionPanel from '../material-kit/expansion-panel/AppExpansionPanel';

class ViewCustomer extends Component {
	render() {
		return (
			<div className="m-sm-30">
				{/* <div className="mb-sm-30">
					<Breadcrumb
						routeSegments={[
							{ name: 'Customer', path: '/view-customer' },
							{ name: 'View Customer' },
						]}
					/>
				</div> */}
				<h6>ViewCustomer</h6>
				<SimpleCard>
					<AppExpansionPanel></AppExpansionPanel>
				</SimpleCard>
			</div>
		);
	}
}

export default ViewCustomer;
