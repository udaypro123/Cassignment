import React,{Fragment} from 'react'
import Card from './Card';
const Analytices = () => {

    let data = [{
        imgsr: "./images/Sales.png",
        heading: "Reports",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Analytical components",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Business-Analysis.png",
        heading: "Capabilities",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
]


  return (
    <>
            <div className="container">
                <span className='headingspan'>Analytices</span>
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

export default Analytices
