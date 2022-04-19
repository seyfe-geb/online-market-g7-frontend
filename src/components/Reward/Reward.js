

const Reward = (props) => {
    return (
        <div className="Reward">
            <h1>{props.id}</h1>
            <div className="Field">
                {props.points}
            </div>
        </div>
    )
}