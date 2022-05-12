
// 05/01/2022 04:12 pm - SSN - [20220501-1612] - [001] - Create AutoComplete component

// Source: Log Rocket https://blog.logrocket.com/build-react-autocomplete-component/


import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';

// 05/05/2022 03:40 pm - SSN

import { isMobile, browserName } from 'react-device-detect';


import './AutoComplete.css';


const AutoComplete = ({ data, size, setOwner, setChild, parentId, error }) => {


    let console__log = (format_and_message, styles) => { };
    let console__dir = (objVar) => { };

    console__log = (format_and_message, styles) => console.log(format_and_message, styles);
    console__dir = (objVar) => console.dir(objVar);



    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
    const [showData, setShowData] = useState(false);
    const [input, setInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const [lastKey, setLastKey] = useState('');

    const [error_local, setError_local] = useState("");

    const refs = [];

    const inputRef = useRef(null);


    useEffect(() => {

        console__log('%c ' + 'Clear input. parentId changed.', 'color:yellow;font-size:12pt;');
        setInput('');

    }, [parentId])



    useEffect(() => {

        console__log('%c ' + 'selectedItemIndex changed.', 'color:red;font-size:36pt;');
        console__log('%c ' + `lastKey [${lastKey}]`, 'color:red;font-size:36pt;');

        if (refs.length == 0) {
            return;
        }


        console__dir(refs[selectedItemIndex]);

        if (!refs[selectedItemIndex]) return;
        if (lastKey != "ArrowDown") return;

        refs[selectedItemIndex].current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });


    }, [selectedItemIndex])





    const gotoNextField = (event) => {

        const currentElement = $(event.target).closest('form');

        let nextIndex = -1;
        let nextInput = null;

        $.each(currentElement, function (ndx, value) {

            $.each(value, function (ndx, value2) {
                console.dir(value2);
                if (value2 == event.target) {
                    nextIndex = parseInt(ndx as any) + 1;
                }

                if (nextIndex != -1 && parseInt(ndx as any) == nextIndex) {
                    nextInput = value2;
                }

            });

        });

        if (nextInput) {
            nextInput.focus();
            nextInput.select();
        }

        return;

    }






    // Source: KindaCode https://www.kindacode.com/article/react-typescript-handling-keyboard-events/

    const keyUpHandler_forInput = (event: React.KeyboardEvent<HTMLInputElement>) => {

        setLastKey(event.key);

        console__log('%c ' + `AutoComplete - keyUpHandler_forInput - 20220508-1159 selectedItemIndex [${selectedItemIndex}]`, 'font-size:12pt;color:blue;');
        console__dir(event.key);



        if (event.key == 'Escape') {

            event.preventDefault();
            event.stopPropagation();

            setShowData(false);

            return;
        }


        if (event.key == 'ArrowDown' && filteredData.length > 0) {

            event.preventDefault();
            event.stopPropagation();



            if (selectedItemIndex + 1 < filteredData.length) {
                let nextItem = selectedItemIndex + 1;
                setSelectedItemIndex(nextItem);

                const id = "id_" + nextItem;
                console.log('id----------------------------------');
                console.log(id);

                const elem = document.getElementById(id);
                //elem.scrollIntoView();

                //$(elem).parent().animate({ "scrollTop": 20 });
                //$($(elem).parent()).scrollTop(-10);
                console.log('ulObject.current.scrollHeight');
                console.log('ulObject.current.scrollHeight');
                console.log('ulObject.current.scrollHeight');
                console.log('ulObject.current.scrollHeight');

                //////console.log(ulObject.current.scrollHeight);

                //ulObject.current.scrollBy(0, 500);



            }


        }



        if (event.key == 'ArrowUp' && filteredData.length > 0) {

            event.preventDefault();
            event.stopPropagation();

            if (selectedItemIndex > 0) {
                let nextItem = selectedItemIndex - 1;
                setSelectedItemIndex(nextItem);
            }

        }

        console__log('%c ' + `AutoComplete - after arrow up or down selectedItemIndex [${selectedItemIndex}]`, 'font-size:12pt;color:blue;');







        if ((event.key == 'Enter' || event.key == 'Tab') && selectedItemIndex > -1) {


            // 05/08/2022 01:22 pm - SSN
            // 05/11/2022 10:55 pm - SSN - Turn back on. Only for enter,

            if (event.key == 'Enter') {

                event.preventDefault();
                event.stopPropagation();

                gotoNextField(event);


            }


            console__log('%c ' + " AutoCompleted - keyUpHandler_forSelect - 20220510-0217", 'font-size:12pt;color:pink;');


            console__log('%c ' + ` AutoCompleted - 20220508-1334 selectedItemIndex  [${selectedItemIndex}] filteredData.length [${filteredData.length}]`, 'font-size:12pt;color:pink;');

            selectItem_fromOptionEnter(selectedItemIndex);

        }


        if ((event.key == 'Enter' || event.key == 'Tab') && filteredData.length == 1) {





            // 05/11/2022 10:55 pm - SSN - Added (For enter only)
            if (event.key == 'Enter') {

                event.preventDefault();
                event.stopPropagation();

                gotoNextField(event);


            }




            console__log('%c ' + `AutoCompleted - keyUpHandler_forSelect - 20220510-0726 filteredData [${filteredData.length}]`, 'font-size:12pt;color:pink;');

            setSelectedItemIndex(0);

            console__log('%c ' + `AutoCompleted - 20220508-1334 selectedItemIndex  [${selectedItemIndex}] filteredData.length [${filteredData.length}]`, 'font-size:12pt;color:pink;');
            setTimeout(() => {
                selectItem_fromOptionEnter(selectedItemIndex);
            }, 1000);

        }



    }





    const onChange = (e) => {


        setLastKey('change');


        console__log('%c ' + 'AutoComplete - onChange - 20220510-0008', 'color:yellow;font-size:12pt;');

        setError_local("");
        error = "";

        if (!data || data.length == 0) {
            setError_local("No data to select from.");
            return;
        }
        const userInput = e.target.value;

        let _filteredData = data;

        if (userInput.indexOf('*') > -1 || userInput.indexOf('?') > -1) {
            // Default to all.
        } else {
            const words: string[] = userInput.split(' ').filter(c => c.trim() != "");

            _filteredData = data.filter(r => {
                return words.every(c2 => r.ta_description.toLowerCase().includes(c2.toLowerCase()))
            });

        }

        setInput(userInput);
        setFilteredData(_filteredData);
        if (_filteredData.length == 1) {
            setSelectedItemIndex(0);
        } else {
            setSelectedItemIndex(-1);
        }
        setShowData(true);

        let nextSibling = $(event.target).next();

        console__log('%c ' + 'set list width', 'color:brown;font-size:12pt;');
        console__dir(nextSibling);

        const width = $(event.target).css('width');
        console__log('%c ' + ' WIDTH', 'font-size:20pt;color:red');
        console__dir(width);
        nextSibling.css({ 'width': width });

    };


    const onClick = (e) => {


        setLastKey('click');

        console__log('%c ' + 'AutoCompleted - onClick - 20220508-1232', 'color:yellow;font-size:12pt;');
        console__dir(e.target.value);

        console__dir(e.target);
        const index = filteredData.findIndex(r => r.ta_id == e.target.value);
        console__log('%c ' + 'INDEX INDEX ', 'color:PINK;font-size:36pt;');
        console__log('%c ' + `${index}`, 'color:PINK;font-size:36pt;');

        setSelectedItemIndex(index);
        selectItem_fromClick(e);


    }


    const selectItem_fromClick = (e) => {

        console__log('%c ' + 'AutoCompleted - selectItem_fromClick - 20220510-0031', 'color:yellow;font-size:12pt;');

        setInput(e.target.innerText);
        setOwner(e.target.value);

        if (setChild) {
            setChild(0);
        }

        setShowData(false);
    }

    const selectItem_fromOptionEnter = (option) => {

        console__log('%c ' + `AutoComplete - selectItem_fromOptionEnter - [${option}] 20220508-1221`, 'font-size:12pt;color:yellow;');

        if (option <= -1 || option >= filteredData.length) {
            console__log('%c ' + `AutoComplete - selectItem_fromOptionEnter - [${option}] 20220510-0315 - INVALID VAUE`, 'font-size:36pt;color:RED;');
            return;
        }


        let selectedElement = filteredData[option];

        if (selectedElement.ta_description != input) {

            setInput(selectedElement.ta_description);
            setOwner(selectedElement.ta_id);

            if (setChild) {
                setChild(0);
            }
        }

        setShowData(false);

    }




    const DataListComponent = () => {


        return (

            showData && input && filteredData.length > 0 ?
                <ul className="cssAutoCompleteUL" >
                    {filteredData.map((elem, index) => {

                        const ref = useRef(null);
                        refs.push(ref);

                        let className = "cssAutocompleteItem ";
                        let className_Selected = "cssAutocompleteItem cssAutocompleteItem-active";

                        return (
                            <li id={`id_` + `${index}`}
                                className={index == selectedItemIndex ? className_Selected : className}
                                key={elem.ta_id}
                                onClick={onClick}
                                value={elem.ta_id}
                                ref={ref}
                            >
                                {elem.ta_description}
                            </li>
                        );

                    })}
                </ul>
                :
                (
                    (input && filteredData.length == 0 && selectedItemIndex <= -1)
                    && <span className="alert alert-danger cssSpanInfo">
                        No matches
                    </span>
                )
        )

    }


    const clearInputField = () => {
        setInput("");
        inputRef.current.focus();
    }


  
    return (
        <>


            <span className="cssNB">
                <input type="text" className="cssAutoComplete-input"
                    onChange={onChange}
                    onKeyDown={keyUpHandler_forInput}
                    value={input}

                    ref={inputRef}
                />
                &nbsp;
                {input && <i onClick={clearInputField} className="glyphicon glyphicon-remove cssGlyphicon" ></i>}
                {!input && <i onClick={clearInputField} className="glyphicon cssGlyphicon" ></i>}

            </span>

            {<DataListComponent />}
            {error && <span className="cssSpanInfo alert alert-danger">{error}</span>}
            {error_local && <span className="cssSpanInfo alert alert-danger">{error_local}</span>}

        </>

    )

};

AutoComplete.propTypes = {
    data: PropTypes.array.isRequired,
    size: PropTypes.number,
    setOwner: PropTypes.func.isRequired,
    setChild: PropTypes.func,
    parentId: PropTypes.number,
    error: PropTypes.string
};


export default AutoComplete;
