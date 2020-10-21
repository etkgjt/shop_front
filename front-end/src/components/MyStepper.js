import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@material-ui/core';

const QontoConnector = withStyles({
	alternativeLabel: {
		top: 10,
		left: 'calc(-50% + 26px)',
		right: 'calc(50% + 26px)',
	},
	active: {
		'& $line': {
			borderColor: '#F44336',
		},
	},
	completed: {
		'& $line': {
			borderColor: '#F44336',
		},
	},
	line: {
		borderColor: '#82B1FF',
		borderTopWidth: 6,
		borderRadius: 1,
	},
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
	root: {
		color: '#82B1FF',
		display: 'flex',
		height: 22,
		alignItems: 'center',
	},
	active: {
		color: '#F44336',
	},
	circle: {
		width: 20,
		height: 20,
		borderRadius: '50%',
		backgroundColor: 'currentColor',
	},
	completed: {
		color: '#F44336',
		zIndex: 1,
		fontSize: 18,
	},
});

function QontoStepIcon(props) {
	const classes = useQontoStepIconStyles();
	const { active, completed } = props;

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
			})}
		>
			{completed ? (
				<Icon
					style={{
						fontSize: 40,
						color: '#F44336',
					}}
				>
					check
				</Icon>
			) : (
				<div className={classes.circle} />
			)}
		</div>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	button: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

function getSteps() {
	return [
		'Edit your cart',
		'Edit shipping information',
		'Select Payment Method',
		'Confirmation',
		'Finish',
	];
}

export default function CustomizedSteppers({ activeStep }) {
	const classes = useStyles();
	const steps = getSteps();
	return (
		<div className={classes.root} style={{ backgroundColor: '#e4f2fe' }}>
			<Stepper
				style={{ backgroundColor: '#e4f2fe' }}
				alternativeLabel
				activeStep={activeStep}
				connector={<QontoConnector />}
			>
				{steps.map((label, idx) => (
					<Step key={label}>
						<StepLabel StepIconComponent={QontoStepIcon}>
							<p
								style={{
									color: idx <= activeStep ? '#F44336' : '#82B1FF',
								}}
							>
								{label}
							</p>
						</StepLabel>
					</Step>
				))}
			</Stepper>
		</div>
	);
}
