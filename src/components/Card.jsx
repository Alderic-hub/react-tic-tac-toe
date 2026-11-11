import '../css/Card.css'

export default function Card(props) {
    return (
        <div className="card" onClick={props.onClick}>
            {props.name}
        </div>
    );
}
