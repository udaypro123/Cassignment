import React, { Fragment } from 'react'
import Card from './Card';
const MobileApp = () => {

    let data = [{
        imgsr: "./images/Sales.png",
        heading: "Access Key Information at any time at anywhere",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "shorten Your sales cycle",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Collabaration on the go",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Enhance Your customer service",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },

]

    return (
        <>
            <div className="container">
                <span className='headingspan'>Mobile Apps</span>
                <div className='quotespara'>If you are passionate about Netflix, Amazon Prime,
                 or Disney+, etc., or you are an entrepreneur or startup with a wonderful
                  movie streaming app idea in mind, in that case, this blog is for you to
                   develop a movie streaming app. We have mentioned a complete guide on 
                   the Role of Movie Streaming Apps in Redefining Entertainment before 
                   discussing it with someone. So, hire a top movie streaming app development
                    company and creating a wonderful streaming application</div>
                <div className='cardsection'>
                    {
                        data.map((data, i) => {
                            return <Fragment key={i}>
                                <Card data={data} />
                            </Fragment>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MobileApp
