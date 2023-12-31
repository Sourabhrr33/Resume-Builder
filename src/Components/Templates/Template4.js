import React from 'react'
import { useSelector } from 'react-redux'
const shortid = require('shortid')

// #c98a55

function Template4() {
    const dataStore = useSelector(state => state.dataStore)
  return (
    <div className='w-100' >
        <div className='row m-0'>
            <div className='col col-3 d-flex align-items-center pt-5' style={{backgroundColor:"#7394BF", flexDirection:"column"}}>
                <div className=" media me-5" >
                    <img className="rounded align-self-center  " src={ dataStore.imageFile} alt='profile-pic'
                        style={{maxHeight:'180px',minHeight:"100px", width:'100px', margin:"0px -50px 0px 0px ",background:'grey',padding:0}}/>
                </div>
                <div className=" mt-3 font-weight-bold " style={{fontFamily:"Serif",}}>
                    <div className='' style={{color:"white",fontSize:"30px"}}>{ dataStore.personalInfo.firstName +" "+  dataStore.personalInfo.lastName}</div>
                    <h5 className='pt-2 'style={{color:"white", textAlign: "center" ,fontSize:"20px"}}>{dataStore.workEx[dataStore.workEx.length -1].title}</h5>
                </div>
                <div className=" ">
                    <div className='p-5 ms-4' style={{fontSize:"18px",display:"inline-block"}}>
                        <div className="px-2 mb-2 " style={{ background: "white", color: "black", borderRadius : "50%", textAlign: "center",lineHeight: "206%",margin: "0px -25px"}}>Email:</div>
                        <div style={{color:'#f7f7f7'}}>{dataStore.personalInfo.Email}</div>
                        <div className=" px-2 mb-2 mt-2" style={{background: "white", color: "black", borderRadius : "50%", textAlign: "center", lineHeight: "206%", margin: "0px -25px"}}>Contact:</div>
                        <div style={{color:'#f7f7f7'}}>{dataStore.personalInfo.Mobile}</div>
                        <div className="px-2 mb-2 mt-2 " style={{background: "white", color: "black", borderRadius : "50%", textAlign: "center",lineHeight: "206%",margin: "0px -25px"}}>Address:</div>
                        <div style={{color:'#f7f7f7'}}>{dataStore.personalInfo.Address1 +", "+ dataStore.personalInfo.Address2
                                +",  "+dataStore.personalInfo.City+", "+ dataStore.personalInfo.State +", "+ dataStore.personalInfo.Country +", "+ dataStore.personalInfo.Pin}
                        </div>
                    </div>
                </div>
            </div>
            <div className='col col-9'>
                <div>
                    <div className="text-justify mt-4">{dataStore.personalInfo.Objective}</div>
                    <hr style={{height:"5px",backgroundColor:"#7394BF"}}/> 
                </div>
                <div className="" style={{fontFamily:"Serif",}}>
                    <div className="">
                    <div className=" text-left bg-light mb-4 " style={{color:"#7394BF"}}> <h3><b>Professional Experience</b> </h3></div>
                    <div className="b text-left " style={{fontSize:"18px"}}>
                        {dataStore.workEx.map((item)=>{
                            return(
                                    <div key={shortid.generate()}>
                                        <div className='mt-2'><h4>{item.orgName}</h4></div>
                                        <div className='mt-2'><b>{item.title}</b></div>
                                        
                                        <div className='mt-2 mb-3'>
                                            <div>Worked in {item.orgName} from {item.startYear} to {item.endYear}.</div>
                                            <div>{item.jobDescription}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="w-100 mt-4"> </div>
                    <hr style={{height:"5px",backgroundColor:"#7394BF"}}/>
                    <div className="bg-light text-left" style={{color:"#7394BF"}}><h3><b>Education</b></h3></div>
                    <div className=" text-left" >
                        <div style={{fontSize:"18px"}}>
                            {dataStore.education.map((item)=>{
                                return(
                                        <div key={shortid.generate()}>
                                            <h5> {item.Degree}</h5>
                                            
                                            <div> I have persued my {item.Type} <b> from {item.University}</b> </div>
                                            <p>Duration: {" "+item.Start+ " - " + item.End}</p> 
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="w-100 mt-4"> </div>
                    <hr style={{height:"5px",backgroundColor:"#7394BF"}}/>
                    <div className="bg-light text-left " >
                        <h3 style={{color:"#7394BF"}}><b>Key Skills</b></h3>
                    </div>
                    <div className=" text-left mb-4" style={{fontSize:"18px"}}>
                            {dataStore.skills.map((skill)=>{
                                return(
                                        <div key={shortid.generate()}><li>{skill.skillName}</li></div>
                                    )
                                })
                            }
                    </div>
                    </div>
                </div>
            </div>
           
        </div>
      
    </div>
  )
}

export default Template4
