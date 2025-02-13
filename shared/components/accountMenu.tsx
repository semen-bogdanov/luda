import MenuIcon from '@mui/icons-material/Menu'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { ListItemIcon } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Tooltip from '@mui/material/Tooltip'
import Link from 'next/link'
import * as React from 'react'
import { FormDialog } from './FormDialog'

export default function AccountMenu() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const [click, setClick] = React.useState(false)
	const open = Boolean(anchorEl)

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			{click ? (
				<>
					<FormDialog click={click} setClick={setClick} />
					<React.Fragment>
						<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
							<Tooltip title='Account settings'>
								<IconButton
									onClick={handleClick}
									size='small'
									sx={{ ml: 2 }}
									aria-controls={open ? 'account-menu' : undefined}
									aria-haspopup='true'
									aria-expanded={open ? 'true' : undefined}>
									<MenuIcon sx={{ width: 50, height: 50 }}></MenuIcon>
								</IconButton>
							</Tooltip>
						</Box>
						<Menu
							anchorEl={anchorEl}
							id='account-menu'
							open={open}
							onClose={handleClose}
							onClick={handleClose}
							slotProps={{
								paper: {
									elevation: 0,
									sx: {
										overflow: 'visible',
										filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
										mt: 1.5,
										'& .MuiAvatar-root': {
											width: 32,
											height: 32,
											ml: -0.5,
											mr: 1,
										},
										'&::before': {
											content: '""',
											display: 'block',
											position: 'absolute',
											top: 0,
											right: 14,
											width: 10,
											height: 10,
											bgcolor: 'background.paper',
											transform: 'translateY(-50%) rotate(45deg)',
											zIndex: 0,
										},
									},
								},
							}}
							transformOrigin={{ horizontal: 'right', vertical: 'top' }}
							anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
							<div className='text-[18px] font-[600] uppercase w-[150px] '>
								<Link className='block mt-[20px] ml-[50px]' href='/'>
									Home
								</Link>
								<Link className='block mt-[20px] ml-[50px]' href='/'>
									Pages
								</Link>
								<Link className='block mt-[20px] mb-[20px] ml-[50px]' href='/'>
									Blog
								</Link>
							</div>
							<Divider />
							<div className='mt-[20px] mb-[20px]'>
								<ListItemIcon onClick={() => setClick(true)}>
									<PersonOutlineIcon className='fill-black cursor-pointer text-[26px] ml-[50px]' />
								</ListItemIcon>
							</div>
						</Menu>
					</React.Fragment>
				</>
			) : (
				<React.Fragment>
					<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
						<Tooltip title='Account settings'>
							<IconButton
								onClick={handleClick}
								size='small'
								sx={{ ml: 2 }}
								aria-controls={open ? 'account-menu' : undefined}
								aria-haspopup='true'
								aria-expanded={open ? 'true' : undefined}>
								<MenuIcon sx={{ width: 50, height: 50 }}></MenuIcon>
							</IconButton>
						</Tooltip>
					</Box>
					<Menu
						anchorEl={anchorEl}
						id='account-menu'
						open={open}
						onClose={handleClose}
						onClick={handleClose}
						slotProps={{
							paper: {
								elevation: 0,
								sx: {
									overflow: 'visible',
									filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
									mt: 1.5,
									'& .MuiAvatar-root': {
										width: 32,
										height: 32,
										ml: -0.5,
										mr: 1,
									},
									'&::before': {
										content: '""',
										display: 'block',
										position: 'absolute',
										top: 0,
										right: 14,
										width: 10,
										height: 10,
										bgcolor: 'background.paper',
										transform: 'translateY(-50%) rotate(45deg)',
										zIndex: 0,
									},
								},
							},
						}}
						transformOrigin={{ horizontal: 'right', vertical: 'top' }}
						anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
						<div className='text-[18px] font-[600] uppercase w-[150px] '>
							<Link className='block mt-[20px] ml-[50px]' href='/'>
								Home
							</Link>
							<Link className='block mt-[20px] ml-[50px]' href='/'>
								Pages
							</Link>
							<Link className='block mt-[20px] mb-[20px] ml-[50px]' href='/'>
								Blog
							</Link>
						</div>
						<Divider />
						<div className='mt-[20px] mb-[20px]'>
							<ListItemIcon onClick={() => setClick(true)}>
								<PersonOutlineIcon className='fill-black cursor-pointer text-[26px] ml-[50px]' />
							</ListItemIcon>
						</div>
					</Menu>
				</React.Fragment>
			)}
		</>
	)
}
