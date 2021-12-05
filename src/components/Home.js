import { useState } from "react"

export const Home = () => {

    const [content, setContent] = useState('');

    return (
        <div class="row gy-5" style={{marginTop: "1rem"}}>
            <Dropdown setContent={setContent} />
            <Information content={content} />
        </div>    
    )
}

export const Dropdown = (props) => {

    const {setContent} = props

    const content1 = "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. ... Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point."
    const content2 = "In linguistics, a word of a spoken language can be defined as the smallest sequence of phonemes that can be uttered in isolation with objective or practical meaning"
    const content3 = "Speech is human vocal communication using language. Each language uses phonetic combinations of vowel and consonant sounds that form the sound of its words, and using those words in their semantic"
    
    return (
    <div class="col-12">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#" onClick={()=>setContent(content1)}>Content 1</a></li>
                <li><a class="dropdown-item" href="#" onClick={()=>setContent(content2)}>Content 2</a></li>
                <li><a class="dropdown-item" href="#" onClick={()=>setContent(content3)}>Content 3</a></li>
            </ul>
        </div>
    </div>
    )
}

export const Information = (props) => {

    const {content} = props

    return (
    <div class="col-12">
        {content}
    </div>
    )
}