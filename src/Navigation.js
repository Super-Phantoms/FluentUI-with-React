import React from 'react';
import { Nav, initializeIcons } from '@fluentui/react';

// Static Menus
const links = [
	{
		links: [
			{
				name: 'Dashboard',
				url: '/',
				key: 'key1',
				iconProps: {
					iconName: 'News',
					styles: {
						root: {
							fontSize: 24,
							color: '#ef4d3e',
							padding: '0 7px 0 10px'
						}
					}
				}
			},
			{
				name: 'Transition Status',
				url: '/',
				key: 'key2',
				iconProps: {
					iconName: 'StackedLineChart',
					styles: {
						root: {
							fontSize: 24,
							color: '#ef4d3e',
							padding: '0 7px 0 10px'
						}
					}
				}
			},
			{
				name: 'Transfer History',
				url: '/',
				key: 'key3',
				iconProps: {
					iconName: 'SwitcherStartEnd',
					styles: {
						root: {
							fontSize: 24,
							color: '#ef4d3e',
							padding: '0 7px 0 10px'
						}
					}
				}
			},
			{
				name: 'Settings',
				url: '/',
				key: 'key4',
				iconProps: {
					iconName: 'PlayerSettings',
					styles: {
						root: {
						fontSize: 24,
						color: '#ef4d3e',
						padding: '0 7px 0 10px'
						}
					}
				}
			}
		]
	}
]

const SidebarStyle = 
{
	root: {
		height: '100vh',
		boxSizing: 'border-box',
		overflow: 'auto',
		paddingTop: '30px',
		backgroundColor: '#fff',
		boxShadow : 'rgb(0 0 0 / 50%) -9px 30px 20px'
	}
}

const Navigation = () => {
	initializeIcons()
	return(
		<Nav
			groups={links}
			selectedKey="key1"
			styles={SidebarStyle}
		/>
	);
}

export default Navigation
