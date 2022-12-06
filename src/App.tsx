import React, {useState} from 'react';
import './App.css';
import {UncontroledAccordion} from "./components/UncontroledAccordion/UncontroledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {Rating, RatingValueType} from "./components/Raiting/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

type PropsTitlePageType = {
    title: string
}

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [onof1, setOnof1] = useState(true)
    let [onof2, setOnof2] = useState(true)
    let [onof3, setOnof3] = useState(true)

  return (
    <div className="App">

        <OnOff on={onof1} callback={ (boo)=>{setOnof1(boo)} }/>
        <OnOff on={onof2} callback={ (boo)=>{setOnof2(boo)} }/>
        <OnOff on={onof3} callback={ (boo)=>{setOnof3(boo)} }/>


        <UncontrolledOnOff/>
        <UncontrolledOnOff/>
        <UncontrolledOnOff />

        <Rating value={ratingValue} changeStatus={setRatingValue}/>


        <PageTitle title='Just Title'/>
        <UncontroledAccordion title={'---Menu---'}/>
        <UncontrolledRating />

        <PageTitle title='Just second Title'/>
        <UncontroledAccordion title={'---Govnu---'}/>
        <UncontrolledRating />

        <Accordion title={'Yo Man!'} collapsed={accordionCollapsed}
                   callback={()=>setAccordionCollapsed(!accordionCollapsed)}/>


    </div>
  )}

function PageTitle(props: PropsTitlePageType) {
    return <h1>{props.title}</h1>
}

export default App;
