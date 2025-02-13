'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ButtonOrange } from '../../ui/ButtonOrange'
import { ContainerBox } from '../container'
import { DataBanner } from './data' // текст для баннера

export default function Banner() {
	// слайдер
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		adaptiveHeight: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false,
					appendDots: (dots: any) => (
						<div
							className='banner__append'
							style={{
								bottom: '0px',
								top: '600px',
								opacity: '1',
							}}>
							<ul
								style={{
									margin: '0px',
								}}>
								{' '}
								{dots}{' '}
							</ul>
						</div>
					),
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
					infinite: true,
					dots: true,
					arrows: false,
					appendDots: (dots: any) => (
						<div
							className='banner__append'
							style={{
								bottom: '0px',
								top: '300px',
								opacity: '1',
							}}>
							<ul
								style={{
									margin: '0px',
								}}>
								{' '}
								{dots}{' '}
							</ul>
						</div>
					),
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false,
					appendDots: (dots: any) => (
						<div
							className='banner__append'
							style={{
								bottom: '0px',
								top: '300px',
								opacity: '1',
							}}>
							<ul
								style={{
									margin: '0px',
									padding: `10px`,
								}}>
								{' '}
								{dots}{' '}
							</ul>
						</div>
					),
				},
			},
		],
	}

	return (
		<div className='h-[400px] md:h-[700px] sm:h-[700px] w-[100%] flex justify-center items-center bg-[#d6d6d6]'>
			<div className='w-[100%] h-[100%] overflow-x-hidden object-cover '>
				<ContainerBox className='text-right '>
					<Slider {...settings}>
						{DataBanner.massivText.map((element: any, index: number) => (
							<div key={index}>
								<h1 className='text-[24px] mt-[130px] sm:text-[48px] text-[white]  sm:mt-[290px]'>
									{element}
								</h1>
								<p className='text-[14px] sm:text-[18px] text-[white]  mt-[15px] '>
									{DataBanner.massivFishText[index]}
								</p>
								<ButtonOrange className='text-[18px] text-white mt-[15px]'>
									{DataBanner.block[index]}
								</ButtonOrange>
							</div>
						))}
					</Slider>
				</ContainerBox>
			</div>
		</div>
	)
}
