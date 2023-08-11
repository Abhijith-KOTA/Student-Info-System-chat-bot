import React, { Component } from "react";
import './Index.css'
class DetailsPage extends Component{
    state={
        isStarted:false,
        isCompleted:false,
        gotIt:false,
        name:'',
        age:0,
        shutDownCount:5
    }

    

    componentDidMount(){
        setTimeout(()=>(this.setState(prevState=>{return {...prevState,isStarted:true}})),3000)
    }   

    componentDidUpdate() {
        const { shutDownCount, name, age } = this.state;
        if (shutDownCount === 0) {
            clearInterval(this.interval);
            window.location.replace(`/thankyou/${name}/${age}`);
        }
    }
    
    
    AskName=()=>{
        this.setState(prevState=>{return {...prevState,gotIt:true}})
        
    }

    renderAge=(e)=>{
        const age=parseInt(e.target.value)
        this.setState(prevState=>{return {...prevState,age:age,isCompleted:true}})
        this.startShutDown()
    }

    startShutDown = () => {
        this.interval = setInterval(() => {
                this.setState(prevState => ({ shutDownCount: prevState.shutDownCount - 1 }));
            
        }, 1000);
    };
    
    

    AskAge=()=>{
        const ageRange=Array.from({ length: 40 - 18 + 1 }, (_, index) => index + 17);
        console.log(ageRange)

        return (
            <select onChange={this.renderAge}>
            <option value="0">Select your age</option>
            {ageRange.map(each=>(<option key={each} value={`${each+1}`}>{each+1}</option>))}
            
        </select>
        )
        
    }



    handelKeyDown=(e)=>{
        if(e.key==="Enter"){
            this.setState(prevState=>{return {...prevState,name:e.target.value}})
        }
    }

    renderNameQuestion=()=>{

        return (
            <div>
                <p>Please enter Your name</p>
                <input type="text" placeholder="Enter your name" className="name-input" onKeyDown={this.handelKeyDown} />
            </div>
        )
    }


    renderNameResponse=()=>{
        const {name}=this.state
        return (
            <>
                <p>Please enter your name</p>
                <p className="user-input" >{name}</p>
                <p>Please Enter Your Age</p>
            </>
        )
    }


    render() {
        const { isStarted, gotIt, name, age,isCompleted,shutDownCount } = this.state;
        return (
            <div className="details-bg-container">
                {!isStarted ? (
                    <div>
                        <div className="loader" ></div>
                        <p className="load-para" >...</p>
                    </div>
                ) : (
                    <div className="chat-container">
                        <p>Hello, Welcome to the student info system!</p>
                        {!gotIt ? (
                            <button className="btn" type="button" onClick={this.AskName}>
                                Got it!
                            </button>
                        ) : (
                            <>
                                <p className="user-input">Got it!</p>
                                {name === '' ? (
                                    this.renderNameQuestion()
                                ) : (
                                    <>
                                        <p>Please enter your name</p>
                                        <p className="user-input">{name}</p>
                                        <p>Please Enter Your Age</p>
                                        {name !== '' && age === 0 && this.AskAge()}
                                        {name !== '' && age !== 0 && <p className="user-input">{age}</p>}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                )}
                {isCompleted && <>
                <p >Thank you. In {shutDownCount} seconds, bot will exit</p>
                
                </>}
            </div>
        );
    }
    


}
export default DetailsPage