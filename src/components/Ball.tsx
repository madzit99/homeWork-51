interface Props {
    value: number;
}

const Ball: React.FC<Props> = ({value}) => {
    return(
        <div className="circle" >
            <span className="my-numbers">{value}</span>
        </div>
    )
}

export default Ball;