import React, { Fragment } from 'react'
import Card from './Card';
const Security = () => {
    let data = [{
        imgsr: "./images/Sales.png",
        heading: "Roles,Profiles and Teams",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Data Security",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Compliance",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    ]


    return (
        <>
            <div className="container">
                <span className='headingspan'>Security</span>
                <div className='quotespara'>The security of a computer system is a cr
                ucial task. It is a process of ensuring the confidentiality
                 and integrity of the OS. Security is one of most 
                 important as well as the major task in order to keep 
                 all the threats or other malicious tasks or attacks or 
                 program away from the computer's software system</div>
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

export default Security

