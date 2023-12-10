import { useState } from "react";

const CostumList = ({ type, list, setAllLists, parentIndex }) => {
    const [listElements, setListElements] = useState(list);

    const handleAddElement = (index) => {
        setAllLists((aL) => {
            const updatedLists = [...aL];
            const newElementValue = updatedLists[parentIndex].newElement;

            if (newElementValue.trim() !== "") {
                updatedLists[parentIndex].list[index] = newElementValue;

                updatedLists[parentIndex].newElement = "";
            }

            return updatedLists;
        });
    };
    switch (type) {
        case "ul":
            return (
                <>
                    <h1>Lista non ordinata</h1>
                    <ul>
                        {listElements.map((elemento, i) => (
                            <li key={`elem-ul-${i}`}>
                                {elemento}
                                <button
                                    onClick={() => {
                                        setListElements(
                                            listElements.filter(
                                                (el) => el !== elemento
                                            )
                                        );
                                    }}
                                >
                                    Elimina {i} {elemento}
                                </button>
                                <button onClick={() => handleAddElement(i)}>
                                    Modifica
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            );

        case "ol":
            return (
                <>
                    <h1>Lista ordinata</h1>
                    <ol>
                        {listElements.map((elemento, i) => (
                            <li key={`elem-ul-${i}`}>
                                {elemento}
                                <button
                                    onClick={() => {
                                        setListElements(
                                            listElements.filter(
                                                (el) => el !== elemento
                                            )
                                        );
                                    }}
                                >
                                    Elimina
                                </button>
                                <button onClick={() => handleAddElement(i)}>
                                    Modifica
                                </button>
                            </li>
                        ))}
                    </ol>
                </>
            );

        case "string":
            return (
                <>
                    <h1>{type}</h1>
                    <div>
                        {listElements.map((elemento, i) => (
                            <p key={`sting-${i}`}>
                                {elemento}
                                <button
                                    onClick={() => {
                                        setListElements(
                                            listElements.filter(
                                                (el) => el !== elemento
                                            )
                                        );
                                    }}
                                >
                                    Elimina
                                </button>
                                <button onClick={() => handleAddElement(i)}>
                                    Modifica
                                </button>
                            </p>
                        ))}
                    </div>
                </>
            );
    }
};

export default CostumList;
