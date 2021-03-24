import React from 'react'

const Banner = () => {
    return (
        <section className="vc_row pt-240 pb-240 bg-cover bg-center" style={{backgroundImage: " url(./assets/demo/bg/bg-18.jpg);"}}>
        <div className="container">
            <div className="row">

                <div className="lqd-column col-md-8 pb-md-4">

                    <h4
                        className="font-weight-bold text-white"
                        data-split-text="true"
                        data-split-options='{"type":"lines"}'
                        data-custom-animations="true"
                        data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":58, "opacity": 1},"animations":{"translateY":0, "opacity": 0.6}}'
                        >Freelance digital designer</h4>
                    <h1
                        className="text-white"
                        data-fittext="true"
                        data-fittext-options='{ "compressor":0.7, "maxFontSize": "72", "minFontSize": "40"}'
                        data-split-text="true"
                        data-split-options='{"type":"chars, words"}'
                        data-custom-animations="true"
                        data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":"1000","startDelay":"150","delay":"40","easing":"easeOutBack","direction":"forward","initValues":{"translateY":35,"rotateZ":5,"opacity":0},"animations":{"translateY":0,"rotateZ":0,"opacity":1}}'>Hi there, I’m <span className="text-secondary">Eugenia</span> glad to see you here</h1>

                </div>

            </div>
        </div>
    </section>
    )
}
export default Banner;