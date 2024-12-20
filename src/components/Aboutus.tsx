import React from 'react'

const Aboutus = () => {
  return (

      <section className="py-6 mt-36  bg-black">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
		
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="" />
				<p className="text-xl font-semibold leading-tight">AMAN KUMAR CHHARI</p>
				<p className="dark:text-gray-600"> developer</p>
			</div>
			
		</div>
	</div>
</section>

  )
}

export default Aboutus
