<!-- Hero rm 7xl in first div-->
<section class="pl-10">
	<div class="relative bg-white overflow-hidden">
		<div class="mx-auto">
			<div
				class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
			>
				<!--polygon svg starts here-->
				<svg
					class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
					fill="currentColor"
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
					aria-hidden="true"
				>
					<polygon points="50,0 100,0 50,100 0,100" />
				</svg>
				<!-- end polygon svg -->
				<!-- where the nav was originally -->
				<div class="py-10" />
				<main
					class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
				>
					<div class="sm:text-center lg:text-left">
						<h1
							class="text-4xl text-left tracking-tight font-extrabold text-blue-900 sm:text-5xl md:text-6xl"
						>
							MATTS MARINE SERVICE!
						</h1>
						<h2
							class="mt-5 block text-2xl font-extrabold text-blue-900 underline decoration-red-500"
						>
							Serving the Great Lakes
						</h2>
						<p
							class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
						>
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
							commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
						</p>

						<p class="mt-5 inline-block text-2xl font-extrabold text-blue-900">
							<!-- phone icon -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 inline-block"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
								/>
							</svg> 111-111-1111
						</p>
						<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
							<div class="rounded-md shadow">
								<a
									href="#"
									class="hover:no-underline transition duration-300 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900  hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
									><span class="link link-underline link-underline-black">Services</span>
								</a>
							</div>
							<div class="mt-3 sm:mt-0 sm:ml-3">
								<a
									href="/contact"
									class="btn-spl hover:no-underline transition duration-300 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md  md:py-4 md:text-lg md:px-10"
									><span class="link link-underline link-underline-lite">Questions</span>
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<img
				class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
				src="./blessed-be-middle-bass.jpg"
				alt=""
			/>
		</div>
	</div>
</section>

<style>
	/*.bg-dunes {
		background-image: url('https://images.unsplash.com/photo-1508776781619-132e6a483b60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
	}*/

	.link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 3px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size 0.5s ease-in-out;
	}

	.link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(#ced2dd, #ced2dd);
	}

	.link-underline-lite {
		background-image: linear-gradient(transparent, transparent), linear-gradient(#051d5f, #051d5f);
	}

	.link-underline:hover {
		background-size: 100% 3px;
		background-position: 0 100%;
	}
</style>
