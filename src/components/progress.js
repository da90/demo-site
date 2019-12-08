import React from "react"

const Progress = (props) => <div className="progress">
    <div className={"progress__bar"} style={{width: props.progress}}></div>
</div>

export default Progress