import '../css/Player.css'

export default function Card(props) {
    return (
        <div className="player">
            {props.player}
        </div>
    );
}