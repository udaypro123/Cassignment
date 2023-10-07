import React,{Fragment} from 'react'
import Card from './Card';
const MarketingAuto = () => {

    let data = [{
        imgsr: "./images/Sales.png",
        heading: "Customer Segmentation",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Lead Nurturing",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Google Ads Integration",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Event Management",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },

]

    return (
        <div className="container">
            <span className='headingspan'>Marketing Automation</span>
            <div className='quotespara'>LMarketing automation uses 
            software to automate monotonous marketing work.
             Marketing departments can automate repetitive tasks 
             such as email marketing, social media posting, and even
              ad campaigns - not just for the sake of efficiency, but also 
            to provide a more personalized experience for their customers.</div>
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
    )
}

export default MarketingAuto
