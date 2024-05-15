interface Props {
    value: number;
}

const Ball: React.FC<Props> = ({value}) => {
    return(
        <div>
            <span>{value}</span>
        </div>
    )
}

export default Ball;