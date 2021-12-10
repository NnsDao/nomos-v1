import React, { useState } from "react"
const Index = () => {
    const [text, setText] = useState('Rule')
    return (
        <>
            <div className=" wrapper justify-between  ">
                <div>
                    <div>
                        Rule
                    </div>
                    <div>
                        Memvers
                    </div>
                </div>
                <div>
                    <div>
                        <div>{text}</div>
                        <div>JOIN</div>
                    </div>
                    <div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Index