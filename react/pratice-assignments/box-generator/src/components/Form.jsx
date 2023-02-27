import React, { useState } from 'react'

const Form = () => {

    const [color, setColor] = useState({
        colorChoice: "",
        hw: "",
    })

    const [colorList, setColorList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Success")
        setColorList([...colorList, color])
        setColor({
            colorChoice: "",
            hw: ""
        })
        // return (
        //     <div style={{
        //         display: 'inline-block',
        //         border: '2px solid black',
        //         width: '200px',
        //         backgroundColor: colorList.color
        //     }}>
        //     </div >
        // )
    }

    // const createBox = (e) => {
    //     return (
    //         <div style={{
    //             display: 'inline-block',
    //             border: '2px solid black',
    //             width: '200px',
    //             backgroundColor: colorList.color
    //         }}>
    //         </div >
    //     )
    // }

    const changeHandler = (e) => {
        setColor({ ...color, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <form action="" className="form col-md-4 mx-auto mt-3" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="" className="me-1">Color</label>
                    <input type="text" name="colorChoice" className="form-control" value={color.colorChoice} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="me-1">Height & Width</label>
                    <input type="number" name="hw" className="form-control" value={color.hw} onChange={changeHandler} />
                </div>
                <button className="btn btn-primary mt-3">Add</button>
            </form>
            <div>
                {
                    colorList.map((color, i) => (
                        <div key={i} style={{
                            display: "inline-block",
                            border: '2px solid black',
                            width: `${color.hw}px`,
                            height: `${color.hw}px`,
                            backgroundColor: color.colorChoice,
                            margin: "10px"
                        }}>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )



}
export default Form;