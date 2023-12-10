import { useState } from "react";
import CostumList from "./CostumList";

const CostumeObj = () => {
    const [allLists, setAllLists] = useState([
        {
            title: "Invitati",
            type: "ul",
            list: ["Tizio", "Caio"],
            newElement: "",
        },
        {
            title: "Lista spesa",
            type: "ol",
            list: ["Banane", "Mele"],
            newElement: "",
        },
    ]);

    const handleInputChange = (index, value) => {
        setAllLists((aL) => {
            const updatedLists = [...aL];
            updatedLists[index].newElement = value;
            console.log(updatedLists);
            return updatedLists;
        });
    };

    return (
        <>
            {allLists.map((elem, i) => (
                <div key={`div${i}`}>
                    <input
                        type="text"
                        placeholder={`Aggiungi ${elem.title}`}
                        value={elem.newElement}
                        onChange={(e) => {
                            handleInputChange(i, e.target.value);
                        }}
                    />

                    <h1>{elem.title}</h1>
                    <CostumList
                        type={elem.type}
                        list={elem.list}
                        parentIndex={i}
                        setAllLists={setAllLists}
                    />
                </div>
            ))}
        </>
    );
};

export default CostumeObj;
