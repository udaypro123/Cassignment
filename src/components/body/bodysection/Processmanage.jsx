import React, { Fragment } from 'react'
import Card from './Card';

const Processmanage = () => {


    let data = [{
        imgsr: "./images/Sales.png",
        heading: "Process management",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Processing Rules",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },]

   

    return (
        <>
            <div className="container">
                <span className='headingspan'>Process management</span>
                <span className='quotespara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
                    labore debitis quam!</span>
                <div className='cardsection'>
                   {
                    data.map((data,i)=>{
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

export default Processmanage;
