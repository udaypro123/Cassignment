import React, {Fragment}from 'react'
import Card from './Card';
const Customization = () => {

    let data = [{
        imgsr: "./images/Sales.png",
        heading: "Layouts",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Custom components",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Views and Filters",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Gloabal selling",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
]

    return (
        <>
            <div className="container">
                <span className='headingspan'>Cutomization</span>
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

export default Customization
