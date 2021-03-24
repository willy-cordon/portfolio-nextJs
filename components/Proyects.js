import React from 'react'

const Proyects = () => {
    return (
        <section id="portfolio" className="vc_row pt-140 pb-50 bg-no-repeat bg-right-top" style= {{backgroundImage: "url(./assets/demo/bg/bg-20.png);"}}>
			<div className="container">

				<div className="row mb-4">

					<div
						className="lqd-column col-md-8"
						data-custom-animations="true"
						data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":30,"translateZ":-122,"rotateX":-68,"opacity":0},"animations":{"translateY":0,"translateZ":0,"rotateX":0,"opacity":1}}'
					>

						<h6 className="mt-0 font-size-14 text-uppercase font-weight-bold ltr-sp-2 text-secondary">My Portfolio</h6>
						<h2
							className="text-white mt-0"
							data-split-text="true"
							data-split-options='{"type":"lines"}'
						>A selection of some recently completed projects, covering a wide range of design disciplines</h2>

					</div>
					
				</div>
				
				<div className="row">

					<div className="lqd-column col-md-12">
	
						<div className="liquid-portfolio-list">
	
							<div className="row">
								
								<div className="lqd-column col-md-12">
									
									<div className="liquid-filter-items justify-content-between align-items-center mb-5">
						
										<div className="liquid-filter-items-inner">
						
											<ul className="filter-list filter-list-inline size-md mb-0 filter-list-scheme-light" id="portdolio-grid-1">
												<li className="active" data-filter="*"><span>Selected Projects</span></li>
												<li data-filter=".uxui"><span>UX - UI Design</span></li>
												<li data-filter=".branding"><span>Branding</span></li>
												<li data-filter=".ecommerce"><span>eCommerce</span></li>
											</ul>
						
											<a href="#" className="btn btn-sm wide btn-bordered border-thick text-uppercase font-weight-bold" style={{fontSize: "12px"}}>
												<span>
													<span className="btn-txt">See all work</span>
												</span>
											</a>
						
										</div>
										
									</div>
									
								</div>
						
							</div>
					
							<div className="row liquid-portfolio-list-row" data-liquid-masonry="true" data-masonry-options='{ "filtersID": "#portdolio-grid-1" }'>
						
								<div className="lqd-column col-lg-4 col-sm-6 masonry-item branding">
						
									<div className="ld-pf-item ld-pf-dark pf-details-inside pf-details-boxed pf-details-circle pf-details-pull-down pf-details-pull-left title-size-18 pf-details-h-str pf-details-v-end pf-contents-mid pf-hover-masktext">
						
										<div className="ld-pf-inner">
						
											<div className="ld-pf-image">
												<figure style={{backgroundImage: " url(./assets/demo/portfolio/pf-37.jpg);"}}>
													<img src="./assets/demo/portfolio/pf-37.jpg" alt="Portfolio Image" />
												</figure>
											</div>
						
											<div className="ld-pf-details">
												<div className="ld-pf-bg" style={{backgroundColor:" #ffd200;"}} data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "this", "duration": 850, "initValues": { "scale": 0, "transformOrigin": "0 80% 0" }, "animations": { "scale": 1, "transformOrigin": "0 80% 0" } }'></div>
												<div className="ld-pf-details-inner justify-content-center" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "startDelay": 200, "duration": 650, "delay": 150, "initValues": { "translateY": "150%" }, "animations": { "translateY": "0", "rotateX": 0 } }'>
													<h3 className="ld-pf-title h4 font-weight-bold" data-split-text="true" data-split-options='{ "type": "lines" }'>Electro summer wave poster</h3>
													<div className="ld-pf-category size-md" data-split-text="true" data-split-options='{ "type": "lines" }'>
														<a href="#">Graphic Design</a>
													</div>
												</div>
											</div>
						
											<a href="#" className="liquid-overlay-link"></a>
						
										</div>
						
									</div>
						
								</div>
						
								<div className="lqd-column col-lg-8 col-sm-6 masonry-item uxui branding">
						
									<div className="ld-pf-item ld-pf-dark pf-details-inside pf-details-boxed pf-details-circle pf-details-pull-down pf-details-pull-left title-size-18 pf-details-h-str pf-details-v-end pf-contents-mid pf-hover-masktext">
						
										<div className="ld-pf-inner">
						
											<div className="ld-pf-image">
												<figure style={{backgroundImage:" url(./assets/demo/portfolio/pf-38.jpg);"}}>
													<img src="./assets/demo/portfolio/pf-38.jpg" alt="Portfolio Image" />
												</figure>
											</div>
						
											<div className="ld-pf-details">
												<div className="ld-pf-bg" style={{backgroundColor:" #ffd200;"}} data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "this", "duration": 850, "initValues": { "scale": 0, "transformOrigin": "0 80% 0" }, "animations": { "scale": 1, "transformOrigin": "0 80% 0" } }'></div>
												<div className="ld-pf-details-inner justify-content-center" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "startDelay": 200, "duration": 650, "delay": 150, "initValues": { "translateY": "150%" }, "animations": { "translateY": "0", "rotateX": 0 } }'>
													<h3 className="ld-pf-title h4 font-weight-bold" data-split-text="true" data-split-options='{ "type": "lines" }'>Electro summer wave poster</h3>
													<div className="ld-pf-category size-md" data-split-text="true" data-split-options='{ "type": "lines" }'>
														<a href="#">Graphic Design</a>
													</div>
												</div>
											</div>
						
											<a href="#" className="liquid-overlay-link"></a>
						
										</div>
						
									</div>
						
								</div>
						
								<div className="lqd-column col-lg-4 col-sm-6 masonry-item ecommerce">
						
									<div className="ld-pf-item ld-pf-dark pf-details-inside pf-details-boxed pf-details-circle pf-details-pull-down pf-details-pull-left title-size-18 pf-details-h-str pf-details-v-end pf-contents-mid pf-hover-masktext">
						
										<div className="ld-pf-inner">
						
											<div className="ld-pf-image">
												<figure style={{backgroundImage:" url(./assets/demo/portfolio/pf-39.jpg);"}}>
													<img src="./assets/demo/portfolio/pf-39.jpg" alt="Portfolio Image" />
												</figure>
											</div>
						
											<div className="ld-pf-details">
												<div className="ld-pf-bg" style={{backgroundColor:" #ffd200;"}} data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "this", "duration": 850, "initValues": { "scale": 0, "transformOrigin": "0 80% 0" }, "animations": { "scale": 1, "transformOrigin": "0 80% 0" } }'></div>
												<div className="ld-pf-details-inner justify-content-center" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "startDelay": 200, "duration": 650, "delay": 150, "initValues": { "translateY": "150%" }, "animations": { "translateY": "0", "rotateX": 0 } }'>
													<h3 className="ld-pf-title h4 font-weight-bold" data-split-text="true" data-split-options='{ "type": "lines" }'>Electro summer wave poster</h3>
													<div className="ld-pf-category size-md" data-split-text="true" data-split-options='{ "type": "lines" }'>
														<a href="#">Graphic Design</a>
													</div>
												</div>
											</div>
						
											<a href="#" className="liquid-overlay-link"></a>
						
										</div>
						
									</div>
						
								</div>
						
								<div className="lqd-column col-lg-4 col-sm-6 masonry-item ecommerce branding">
						
									<div className="ld-pf-item ld-pf-dark pf-details-inside pf-details-boxed pf-details-circle pf-details-pull-down pf-details-pull-left title-size-18 pf-details-h-str pf-details-v-end pf-contents-mid pf-hover-masktext">
						
										<div className="ld-pf-inner">
						
											<div className="ld-pf-image">
												<figure style={{backgroundImage:"url(./assets/demo/portfolio/pf-40.jpg);"}}>
													<img src="./assets/demo/portfolio/pf-40.jpg" alt="Portfolio Image" />
												</figure>
											</div>
						
											<div className="ld-pf-details">
												<div className="ld-pf-bg" style={{backgroundColor:" #ffd200;"}} data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "this", "duration": 850, "initValues": { "scale": 0, "transformOrigin": "0 80% 0" }, "animations": { "scale": 1, "transformOrigin": "0 80% 0" } }'></div>
												<div className="ld-pf-details-inner justify-content-center" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "startDelay": 200, "duration": 650, "delay": 150, "initValues": { "translateY": "150%" }, "animations": { "translateY": "0", "rotateX": 0 } }'>
													<h3 className="ld-pf-title h4 font-weight-bold" data-split-text="true" data-split-options='{ "type": "lines" }'>Electro summer wave poster</h3>
													<div className="ld-pf-category size-md" data-split-text="true" data-split-options='{ "type": "lines" }'>
														<a href="#">Graphic Design</a>
													</div>
												</div>
											</div>
						
											<a href="#" className="liquid-overlay-link"></a>
						
										</div>
						
									</div>
						
								</div>
						
								<div className="lqd-column col-lg-4 col-sm-6 masonry-item bradning">
						
									<div className="ld-pf-item ld-pf-dark pf-details-inside pf-details-boxed pf-details-circle pf-details-pull-down pf-details-pull-left title-size-18 pf-details-h-str pf-details-v-end pf-contents-mid pf-hover-masktext">
						
										<div className="ld-pf-inner">
						
											<div className="ld-pf-image">
												<figure style={{backgroundImage:" url(./assets/demo/portfolio/pf-41.jpg);"}}>
													<img src="./assets/demo/portfolio/pf-41.jpg" alt="Portfolio Image" />
												</figure>
											</div>
						
											<div className="ld-pf-details">
												<div className="ld-pf-bg" style={{backgroundColor:" #ffd200;"}} data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "this", "duration": 850, "initValues": { "scale": 0, "transformOrigin": "0 80% 0" }, "animations": { "scale": 1, "transformOrigin": "0 80% 0" } }'></div>
												<div className="ld-pf-details-inner justify-content-center" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "startDelay": 200, "duration": 650, "delay": 150, "initValues": { "translateY": "150%" }, "animations": { "translateY": "0", "rotateX": 0 } }'>
													<h3 className="ld-pf-title h4 font-weight-bold" data-split-text="true" data-split-options='{ "type": "lines" }'>Electro summer wave poster</h3>
													<div className="ld-pf-category size-md" data-split-text="true" data-split-options='{ "type": "lines" }'>
														<a href="#">Graphic Design</a>
													</div>
												</div>
											</div>
						
											<a href="#" className="liquid-overlay-link"></a>
						
										</div>
						
									</div>
						
								</div>
						
								<div className="lqd-column col-lg-8 col-sm-6 masonry-item uxui">
						
									<div className="ld-pf-item ld-pf-dark pf-details-inside pf-details-boxed pf-details-circle pf-details-pull-down pf-details-pull-left title-size-18 pf-details-h-str pf-details-v-end pf-contents-mid pf-hover-masktext">
						
										<div className="ld-pf-inner">
						
											<div className="ld-pf-image">
												<figure style={{backgroundImage:" url(./assets/demo/portfolio/pf-42.jpg);"}}>
													<img src="./assets/demo/portfolio/pf-42.jpg" alt="Portfolio Image" />
												</figure>
											</div>
						
											<div className="ld-pf-details">
												<div className="ld-pf-bg" style={{backgroundColor:" #ffd200;"}} data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "this", "duration": 850, "initValues": { "scale": 0, "transformOrigin": "0 80% 0" }, "animations": { "scale": 1, "transformOrigin": "0 80% 0" } }'></div>
												<div className="ld-pf-details-inner justify-content-center" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "startDelay": 200, "duration": 650, "delay": 150, "initValues": { "translateY": "150%" }, "animations": { "translateY": "0", "rotateX": 0 } }'>
													<h3 className="ld-pf-title h4 font-weight-bold" data-split-text="true" data-split-options='{ "type": "lines" }'>Electro summer wave poster</h3>
													<div className="ld-pf-category size-md" data-split-text="true" data-split-options='{ "type": "lines" }'>
														<a href="#">Graphic Design</a>
													</div>
												</div>
											</div>
						
											<a href="#" className="liquid-overlay-link"></a>
						
										</div>
						
									</div>
						
								</div>
						
								<div className="lqd-column col-lg-4 col-sm-6 masonry-item ecommerce">
						
									<div className="ld-pf-item ld-pf-dark pf-details-inside pf-details-boxed pf-details-circle pf-details-pull-down pf-details-pull-left title-size-18 pf-details-h-str pf-details-v-end pf-contents-mid pf-hover-masktext">
						
										<div className="ld-pf-inner">
						
											<div className="ld-pf-image">
												<figure style={{backgroundImage:" url(./assets/demo/portfolio/pf-43.jpg);"}}>
													<img src="./assets/demo/portfolio/pf-43.jpg" alt="Portfolio Image" />
												</figure>
											</div>
						
											<div className="ld-pf-details">
												<div className="ld-pf-bg" style={{backgroundColor:" #ffd200;"}} data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "this", "duration": 850, "initValues": { "scale": 0, "transformOrigin": "0 80% 0" }, "animations": { "scale": 1, "transformOrigin": "0 80% 0" } }'></div>
												<div className="ld-pf-details-inner justify-content-center" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "startDelay": 200, "duration": 650, "delay": 150, "initValues": { "translateY": "150%" }, "animations": { "translateY": "0", "rotateX": 0 } }'>
													<h3 className="ld-pf-title h4 font-weight-bold" data-split-text="true" data-split-options='{ "type": "lines" }'>Electro summer wave poster</h3>
													<div className="ld-pf-category size-md" data-split-text="true" data-split-options='{ "type": "lines" }'>
														<a href="#">Graphic Design</a>
													</div>
												</div>
											</div>
						
											<a href="#" className="liquid-overlay-link"></a>
						
										</div>
						
									</div>
						
								</div>
								
							</div>
						
						</div>
	
					</div>

				</div>

			</div>
		</section>
    )
}

export default Proyects;
