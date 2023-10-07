import React,{Fragment} from 'react'
import Card from './Card';

const Performance = () => {


    let data = [{
        imgsr: "./images/Sales.png",
        heading: "Forecasting",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "territary management",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },

    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Gamification",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
]


    return (
        <>
            <div className="container">
                <span className='headingspan'>Perfomance management</span>
                <span className='quotespara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
                    labore debitis quam!</span>
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

export default Performance;

