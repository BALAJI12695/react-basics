import React from 'react'

const List = () => {

    const characters = [{
        name: "Hugie",
        height: "5.6",
        weight: "80 kg",
        skill: "Teleport",
    },
    {
        name: "Alex",
        height: "6.0",
        weight: "75 kg",
        skill: "Invisibility",
    }

    ]


    return (
        <>
            <h1>Characters</h1>
            {characters.map((char, index) =>
                <div key={index}  >
                    <p > Name : {char.name}</p>
                    <p > Skill : {char.skill}</p>
                    <p > Height : {char.height}</p>
                    <p > Weight : {char.weight}</p>
                </div>
            )}
        </>
    )
}

export default List