import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {Rating, RatingValueType} from "./components/Raiting/Rating";

type PropsTitlePageType = {
    title: string
}

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)



  return (
    <div className="App">


        <OnOff/>
        <OnOff/>
        <OnOff />
        <Rating value={ratingValue} changeStatus={setRatingValue}/>


        <PageTitle title='Just Title'/>
        <Accordion title={'---Menu---'}/>
        <UncontrolledRating />

        <PageTitle title='Just second Title'/>
        <Accordion title={'---Govnu---'} />
        <UncontrolledRating />




    </div>
  )}

function PageTitle(props: PropsTitlePageType) {
    return <h1>{props.title}</h1>
}

export default App;
