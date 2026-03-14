export function Test(props){
    const {name, job} = props // proos data came from out of the componant,
    //  it send form inited value in the place we call it at <Test name = "Elsayed"/>
    return (
        <div>
            <h1> hi {name}</h1>
            <h2> your job is: {job}</h2>
        </div>
    )
};