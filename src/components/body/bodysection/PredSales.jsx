import React,{Fragment} from 'react';
import Card from './Card';
const PredSales = () => {

    let data = [{
        imgsr: "./images/Sales.png",
        heading: "Lead and deal prediction",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Voice prediction",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Macro Suggestions",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },

]


    return (
        <>
            <div className="container">
                <span className='headingspan'>Predictive Sales and Intelligence</span>
                <div className='quotespara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
                    labore debitis quam!
                    Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
                    labore debitis quam!
                    </div>
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

export default PredSales

