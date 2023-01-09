import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/UncontroledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {Rating, RatingValueType} from "./components/Raiting/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";

type PropsTitlePageType = {
    title: string
}

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [onof1, setOnof1] = useState(true)
    let [onof2, setOnof2] = useState(true)
    let [onof3, setOnof3] = useState(true)
    const onClickAlert = () => {
        alert('lol')
    }
    const [title, setTitle] = useState('This is TITLE')

    const [arrayMusic, setArrayMusic] = useState([
        {id:1, title:'Phonk', value:'1'},
        {id:2, title:'Rock', value:'2'},
        {id:3, title:'Rap', value:'3'},
        {id:4, title:'UnderGround', value:'4'},
    ])
    const onChangeSelect = (value: string) => {
        setTitle(value)
    }
    return (
        <div className="App">

            {/*<OnOff on={onof1} callback={ (boo)=>{setOnof1(boo)} }/>*/}
            {/*<OnOff on={onof2} callback={ (boo)=>{setOnof2(boo)} }/>*/}
            {/*<OnOff on={onof3} callback={ (boo)=>{setOnof3(boo)} }/>*/}


            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledOnOff />*/}

            {/*<Rating value={ratingValue} changeStatus={setRatingValue}/>*/}


            {/*<PageTitle title='Just Title'/>*/}
            {/*<UncontrolledAccordion title={'---Menu---'}/>*/}
            {/*<UncontrolledRating />*/}

            {/*<PageTitle title='Just second Title'/>*/}
            {/*<UncontrolledAccordion title={'---Govnu---'}/>*/}
            {/*<UncontrolledRating />*/}

            {/*<Accordion title={'CONTROLLED ACCORDION!'} collapsed={accordionCollapsed} callback={()=>setAccordionCollapsed(!accordionCollapsed)} items={[*/}
            {/*    {title: 'lolu', value: 1},*/}
            {/*    {title: 'lole', value: 2},*/}
            {/*    {title: 'lolo', value: 3},*/}
            {/*    {title: 'lola', value: 4},]}*/}
            {/*    onClick={onClickAlert}/>*/}
            <Select onChangeSelect={onChangeSelect} arrayMusic={arrayMusic} valueTitle={title}/>
        </div>
    )
}

function PageTitle(props: PropsTitlePageType) {
    return <h1>{props.title}</h1>
}

export default App;
