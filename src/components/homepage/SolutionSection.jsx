import React,{Fragment} from 'react'
import Homecard from './Homecard'

const SolutionSection = () => {


    let data = [{
        imgsr: "./images/Finance-Solution.png",
        heading: "Finance-Solution",
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
        imgsr: "./images/Marketing-Strategy.png",
        heading: "Marketing-Strategy",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Customer-Service.png",
        heading: "Customer-Service",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
    {
        imgsr: "./images/Sales.png",
        heading: "Sales",
        para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quos dignissimos natus, ratione qui voluptatum nobis alias molestiae
        labore debitis quam!`
    },
]

  return (
    
    
      <>
            <div className="container">
                <span className='headingspan'>Solutions</span>
                <span className='quotespara'><img src="./images/Cut-Elements.png" alt="" /></span>
                <div className='cardsection'>
                   {
                    data.map((data,i)=>{
                        return <Fragment key={i}>
                             <Homecard data={data} />
                        </Fragment>
                    })
                }
                </div>
            </div>
        </>
     
  )
}

export default SolutionSection;

